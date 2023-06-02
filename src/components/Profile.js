import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import surfPosts from 'reducers/surfPosts';
import { API_URL } from 'utils/urls';
import { InnerWrapper, StyledMainWrapper, PostsWrapper, SinglePostWrapper, GreetingText, LogoutButton, Headline, Location, Message } from 'styled/ProfileStyled';
import PostForm from './PostForm';

const Profile = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate('/login')
    }
  }, [accessToken]);

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

  return (
    <StyledMainWrapper>
      <InnerWrapper>
        <GreetingText>Welcome {username} to your profile!</GreetingText>
        <LogoutButton type="button" onClick={OnLogoutButtonClick}>Log out</LogoutButton>
        <PostsWrapper>
          {useSelector((store) => store.surfPosts.createdByUserItems).map((item) => {
            return (
              <SinglePostWrapper key={item.id}>
                <Headline>{item.headline}</Headline>
                <Location>{item.location}</Location>
                <Message>{item.message}</Message>
                <p>{new Date(item.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                <p>🤙 x {item.likes}</p>
              </SinglePostWrapper>
            )
          })}
          <PostForm />
        </PostsWrapper>
      </InnerWrapper>
    </StyledMainWrapper>
  )
}

export default Profile