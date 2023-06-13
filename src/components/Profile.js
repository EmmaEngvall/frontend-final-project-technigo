/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import surfPosts from 'reducers/surfPosts';
import { API_URL } from 'utils/urls';
import { InnerWrapper, StyledMainWrapper, PostsWrapper, SinglePostWrapper, GreetingText, LogoutButton, Headline, Location, Message } from 'styled/ProfileStyled';
import styled from 'styled-components/macro';
import { BackgroundContainer } from 'styled/LoginStyled';
import PostForm from './PostForm';
import HandleFav from './HandleFav';
import DltBtn from './DltBtn';
import EditPost from './EditPost';
import ImageBackground from '../images/img_profile.jpg';
import ProfileSearchFav from './ProfileSearchFav';

const BackgroundImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

const Profile = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);
  const navigate = useNavigate();
  const [currentSortOrder, setCurrentSortOrder] = useState('desc')
  const allMySurfPosts = useSelector((store) => store.surfPosts.createdByUserItems);

  useEffect(() => {
    if (!accessToken) {
      navigate('/login')
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL('mysurfposts'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(surfPosts.actions.setError(null));
          dispatch(surfPosts.actions.setCreatedByUserItems(data.response));
        } else {
          dispatch(surfPosts.actions.setError(data.response));
          dispatch(surfPosts.actions.setCreatedByUserItems([]));
        }
      });
  }, [accessToken, dispatch])

  const OnLogoutButtonClick = () => {
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setUsername(null));
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setError(null));
    dispatch(surfPosts.actions.setCreatedByUserItems([]));
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL('myfavsurfposts'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(surfPosts.actions.setError(null));
          dispatch(surfPosts.actions.setSavedFavItems(data.response));
          dispatch(surfPosts.actions.setFilteredSavedFavItems(data.response));
        } else {
          dispatch(surfPosts.actions.setError(data.response));
          dispatch(surfPosts.actions.setSavedFavItems([]));
          dispatch(surfPosts.actions.setFilteredSavedFavItems([]));
        }
      });
  }, [accessToken, dispatch])

  const handleSortMyPosts = () => {
    const filteredMyPosts = [...allMySurfPosts];
    let nextSortOrder;

    if (currentSortOrder === 'asc') {
      filteredMyPosts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt)
        return dateB - dateA;
      });
      nextSortOrder = 'desc';
    } else {
      filteredMyPosts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateA - dateB;
      });
      nextSortOrder = 'asc';
    }
    dispatch(surfPosts.actions.setCreatedByUserItems(filteredMyPosts));
    setCurrentSortOrder(nextSortOrder);
  };

  return (
    <StyledMainWrapper>
      <InnerWrapper>
        <BackgroundContainer>
          <BackgroundImg src={ImageBackground} />
          <p>Photo by
            <a
              href="https://unsplash.com/@kdarmody?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"> Kate Darmody
            </a> on
            <a
              href="https://unsplash.com/photos/eFL0yp401w4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"> Unsplash
            </a>
          </p>
        </BackgroundContainer>
        <GreetingText>Welcome {username} to your profile!</GreetingText>
        <LogoutButton type="button" onClick={OnLogoutButtonClick}>Log out</LogoutButton>
        <h2>Create a post</h2>
        <PostForm />
        <h2>My posts</h2>
        <button
          key="sortBtn"
          type="button"
          onClick={() => handleSortMyPosts()}>
          {(currentSortOrder === 'desc') ? <p>Sort Old to New</p> : <p>Sort New to Old</p>}
        </button>
        {/* <button
          key="unSortBtn"
          type="button">
            Sort newest to oldest
        </button> */}
        <PostsWrapper>
          {useSelector((store) => store.surfPosts.createdByUserItems).map((item) => {
            return (
              <SinglePostWrapper key={item.id}>
                <Headline>{item.headline}</Headline>
                <Location>{item.location}</Location>
                <p>{item.level}</p>
                <EditPost message={item.message} id={item._id} />
                <p>{new Date(item.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                <DltBtn id={item._id} />
                <p>🤙 x {item.numOfLikes}</p>
              </SinglePostWrapper>
            )
          })}
        </PostsWrapper>
        <h2>My favorite posts</h2>
        <ProfileSearchFav />
        <PostsWrapper>
          {useSelector((store) => store.surfPosts.filteredSavedFavItems).map((item) => {
            return (
              <SinglePostWrapper key={item.id}>
                <Headline>{item.headline}</Headline>
                <Location>{item.location}</Location>
                <p>{item.level}</p>
                <Message>{item.message}</Message>
                <p>{new Date(item.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                <p>🤙 x {item.numOfLikes}</p>
                <HandleFav id={item._id} />
              </SinglePostWrapper>
            )
          })}
        </PostsWrapper>
      </InnerWrapper>
    </StyledMainWrapper>
  )
}

export default Profile