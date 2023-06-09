import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from 'utils/urls';
import styled from 'styled-components/macro';
import { StyledMainWrapper, InnerWrapper, RadioButtonWrapper, StyledForm, ErrorMessage, LabelForm, StyledHeader, SignUpText, BackgroundContainer, SubmitButton, PlaceholderTxtSignUp } from 'styled/LoginStyled';
import { CreditTxt } from 'styled/MainStyled';
import user from '../reducers/user';
import ImageBackground from '../images/img_login.jpg';

const BackgroundImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState('login');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);
  const error = useSelector((store) => store.user.error);
  useEffect(() => {
    if (accessToken) {
      navigate('/profile')
    }
  }, [accessToken, navigate]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    let body;
    if (mode === 'register') {
      body = JSON.stringify({ username, password, email });
    } else {
      body = JSON.stringify({ username, password });
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body
    };

    fetch(API_URL(mode), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setError(null));
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response));
        }
      })
  }

  const onInputChange = () => {
    dispatch(user.actions.setError(null));
  };

  return (
    <StyledMainWrapper>
      <InnerWrapper>
        <div>
          <StyledHeader>Join with good vibes!</StyledHeader>
          <SignUpText>Sign up and share your best surf recommendations</SignUpText>
        </div>
        <StyledForm onSubmit={onFormSubmit}>
          <RadioButtonWrapper>
            <label htmlFor="register">Register
              <input
                type="radio"
                id="register"
                checked={mode === 'register'}
                onChange={() => setMode('register')} />
            </label>
            <label htmlFor="login">Login
              <input
                type="radio"
                id="login"
                checked={mode === 'login'}
                onChange={() => setMode('login')} />
            </label>
          </RadioButtonWrapper>
          <LabelForm className={(mode === 'login') ? 'login' : 'register'} htmlFor="email">Email
            <PlaceholderTxtSignUp
              type="email"
              id="email"
              placeholder="Your email here"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                onInputChange();
              }} />
          </LabelForm>
          <LabelForm htmlFor="username">Username
            <PlaceholderTxtSignUp
              type="text"
              id="username"
              placeholder="Min 2 characters"
              value={username}
              minLength="2"
              maxLength="14"
              onChange={(e) => {
                setUsername(e.target.value);
                onInputChange();
              }} />
          </LabelForm>
          <LabelForm htmlFor="password">Password
            <PlaceholderTxtSignUp
              type="password"
              id="password"
              placeholder="Min 8 characters"
              value={password}
              minLength="8"
              onChange={(e) => {
                setPassword(e.target.value);
                onInputChange();
              }} />
          </LabelForm>
          <SubmitButton
            type="submit"
            disabled={username.length < 2 || password.length < 8}>
            {(mode === 'register') ? 'Register' : 'Login'}
          </SubmitButton>
        </StyledForm>
        {error === 'Invalid email address' && mode === 'register' && (<ErrorMessage>Invalid email address</ErrorMessage>)}
        {error !== null && mode === 'register' && (<ErrorMessage>Sorry, user already exists.</ErrorMessage>)}
        {error !== null && mode === 'login' && (<ErrorMessage>Pls make sure that you are a registered user and that you have filled in the correct login information.</ErrorMessage>)}
      </InnerWrapper>
      <BackgroundContainer>
        <BackgroundImg src={ImageBackground} />
        <CreditTxt>Photo by
          <a
            href="https://unsplash.com/@delphinenz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"> Delphine Ducaruge
          </a> on
          <a
            href="https://unsplash.com/photos/7DgLMKBJmdo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"> Unsplash
          </a>
        </CreditTxt>
      </BackgroundContainer>
    </StyledMainWrapper>
  );
}

export default LogIn;