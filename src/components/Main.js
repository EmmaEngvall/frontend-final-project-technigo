/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import user from 'reducers/user';
import surfPosts from 'reducers/surfPosts';
import { API_URL } from 'utils/urls';
import { InnerWrapper, StyledMainWrapper, PostsWrapper, SinglePostWrapper, GreetingText, LogoutButton, Headline, Location, Message } from 'styled/MainStyled';
import HandleFav from './HandleFav';
import Weather from './Weather';

const Main = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);
  const allItemsArray = useSelector((store) => store.surfPosts.allItems)
  console.log(allItemsArray)

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
        } else {
          dispatch(surfPosts.actions.setError(data.response));
          dispatch(surfPosts.actions.setAllItems([]));
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
        } else {
          dispatch(surfPosts.actions.setError(data.response));
          dispatch(surfPosts.actions.setAllItems([]));
        }
      });
  };

  return (
    <StyledMainWrapper>
      <InnerWrapper>
        <GreetingText>Welcome to the wave finder!</GreetingText>
        <Weather />
        {(!accessToken) ? (
          <>
            <p>Register and login to share your surf experiences</p>
            <NavLink to="/login">
              <LogoutButton type="button">Register/Log In</LogoutButton>
            </NavLink>
          </>)
          : (<p>Hello {username}</p>)}
        <p>Recommendations that our members have shared...</p>
        <PostsWrapper>
          {useSelector((store) => store.surfPosts.allItems).map((item) => {
            return (
              <SinglePostWrapper key={item.id}>
                <Headline>{item.headline}</Headline>
                <Location>{item.location}</Location>
                <Message>{item.message}</Message>
                <p>{new Date(item.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                <button
                  key="likeBtn"
                  type="submit"
                  onClick={() => handleLikeChange(item._id)}
                  disabled={(!accessToken)}>
                  <p>🤙 x {item.numOfLikes}</p>
                </button>
                <HandleFav id={item._id} />
              </SinglePostWrapper>
            )
          })}
        </PostsWrapper>
      </InnerWrapper>
    </StyledMainWrapper>
  )
}

export default Main