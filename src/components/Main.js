import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import user from 'reducers/user';
import surfPosts from 'reducers/surfPosts';
import { API_URL } from 'utils/urls';
import { InnerWrapper, StyledMainWrapper, PostsWrapper, SinglePostWrapper, GreetingText, LogoutButton, Headline, Location, Message } from 'styled/MainStyled';

const Main = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);

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

  return (
    <StyledMainWrapper>
      <InnerWrapper>
        <GreetingText>Welcome to the wave finder!</GreetingText>
        {(!accessToken)
          ? <p>Register and login to share your surf experiences</p>
          : <p>Hello {username}</p>}
        {(!accessToken)
          ?
          <NavLink to="/login">
            <LogoutButton type="button">Register/Log In</LogoutButton>
          </NavLink>
          : ''}
        <p>What our others members have shared...</p>
        <PostsWrapper>
          {useSelector((store) => store.surfPosts.allItems).map((item) => {
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
        </PostsWrapper>
      </InnerWrapper>
    </StyledMainWrapper>
  )
}

export default Main