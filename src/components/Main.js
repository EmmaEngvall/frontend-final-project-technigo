/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
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
  const [loading, setLoading] = useState(false);
  const maxRetries = 3;
  const retryDelay = 2000;
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }

      setLoading(true)
      fetch(API_URL('surfposts'), options)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setLoading(false)
            dispatch(surfPosts.actions.setError(null));
            dispatch(surfPosts.actions.setAllItems(data.response));
            dispatch(surfPosts.actions.setFilteredItems(data.response));
          } else {
            dispatch(surfPosts.actions.setError(data.response));
            dispatch(surfPosts.actions.setAllItems([]));
            dispatch(surfPosts.actions.setFilteredItems([]));
          }
        })
        .catch((error) => {
          console.error('Fetch error:', error);
          if (retryCount < maxRetries) {
            setTimeout(fetchData, retryDelay);
            setRetryCount((prevRetryCount) => prevRetryCount + 1);
          } else {
            setLoading(false);
            dispatch(surfPosts.actions.setError('Failed to fetch data.'));
            dispatch(surfPosts.actions.setAllItems([]));
            dispatch(surfPosts.actions.setFilteredItems([]));
          }
        })
    };

    fetchData();
  }, [dispatch, retryCount]);

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
          <p>Photo by
            <a
              href="https://unsplash.com/@joshwithers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"> Josh Withers
            </a> on
            <a
              href="https://unsplash.com/photos/1PWhYZ_erME?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"> Unsplash
            </a>
          </p>
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
        {(loading) ? (
          <p>Loading recommendations that our members have shared...</p>)
          : (
            <p>Recommendations that our members have shared...</p>)}
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