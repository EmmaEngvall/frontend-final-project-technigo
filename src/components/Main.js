/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import user from 'reducers/user';
import surfPosts from 'reducers/surfPosts';
import { API_URL } from 'utils/urls';
import { InnerWrapper, StyledMainWrapper, PostsWrapper, SinglePostWrapper, GreetingText, LogoutButton, Headline, Location, Message } from 'styled/MainStyled';
import styled from 'styled-components/macro';
import { BackgroundContainer } from 'styled/LoginStyled';
import HandleFav from './HandleFav';
import Weather from './Weather';
import ImageBackground from '../images/img_main.jpg';
// import SingleArticle from './SingleArticle';
import Praise from './Praise';
import MainSortOldNewBtn from './MainSortOldNewBtn';
import MainSortOnLikes from './MainSortLikeBtn';
import Carousel from './Carousel';
import MainFilterLevel from './MainFilterLevel';

const BackgroundImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

const Main = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);
  const allItemsArray = useSelector((store) => store.surfPosts.allItems)
  const filteredItems = useSelector((store) => store.surfPosts.filteredItems)

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(API_URL('surfposts'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(surfPosts.actions.setError(null));
          dispatch(surfPosts.actions.setAllItems(data.response));
          dispatch(surfPosts.actions.setFilteredItems(data.response));
        } else {
          dispatch(surfPosts.actions.setError(data.response));
          dispatch(surfPosts.actions.setAllItems([]));
          dispatch(surfPosts.actions.setFilteredItems([]));
        }
      });
  }, [dispatch])

  const handleLikeChange = (id) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL(`surfposts/${id}/like`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(surfPosts.actions.setError(null));
          const updatedItems = allItemsArray.map((item) => {
            if (item._id === data.response._id) {
              return data.response;
            }
            return item;
          });
          dispatch(surfPosts.actions.setAllItems(updatedItems));
          const updatedFilteredItems = filteredItems.map((item) => {
            if (item._id === data.response._id) {
              return data.response;
            }
            return item;
          });
          dispatch(surfPosts.actions.setFilteredItems(updatedFilteredItems));
        } else {
          dispatch(surfPosts.actions.setError(data.response));
          dispatch(surfPosts.actions.setAllItems([]));
          dispatch(surfPosts.actions.setFilteredItems([]));
        }
      });
  };

  return (
    <StyledMainWrapper>
      <InnerWrapper>
        <BackgroundContainer>
          <BackgroundImg src={ImageBackground} />
          <p>Photo by X on Unsplash</p>
        </BackgroundContainer>
        <GreetingText>Welcome to Wave Finder!</GreetingText>
        {(!accessToken) ? (
          <>
            <p>Register and login to share your surf experiences</p>
            <NavLink to="/login">
              <LogoutButton type="button">Register/Log In</LogoutButton>
            </NavLink>
          </>)
          : (<p>Hello {username}</p>)}
        <Carousel />
        <Weather />
        <p>Recommendations that our members have shared...</p>
        <PostsWrapper>
          <MainFilterLevel />
          <MainSortOldNewBtn />
          <MainSortOnLikes />
          {filteredItems.map((item) => {
            return (
              <SinglePostWrapper key={item.id}>
                <Headline>{item.headline}</Headline>
                <Location>{item.location}</Location>
                <p>{item.level}</p>
                <Message>{item.message}</Message>
                <p>{new Date(item.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                <div className="tooltip">
                  <button
                    key="likeBtn"
                    type="submit"
                    onClick={() => handleLikeChange(item._id)}
                    disabled={(!accessToken)}>
                    <p>🤙 x {item.numOfLikes}</p>
                    {(!accessToken) && <span className="tooltiptext">Become a member to like a post</span>}
                  </button>
                </div>
                <HandleFav id={item._id} />
              </SinglePostWrapper>
            )
          })}
        </PostsWrapper>
        <Praise />
      </InnerWrapper>
    </StyledMainWrapper>
  )
}

export default Main