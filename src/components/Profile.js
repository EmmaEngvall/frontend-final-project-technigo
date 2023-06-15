/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import surfPosts from 'reducers/surfPosts';
import { API_URL } from 'utils/urls';
import { InnerWrapper, StyledMainWrapper, ProfileH2, PostsWrapper, InnerWrapperPosts, SinglePostWrapper, PostTopWrapper, GreetingText, Headline, Location, Message, IntroText, LikeIcon, LikeWrapper, LikeFavoriteWrapper } from 'styled/ProfileStyled';
import styled from 'styled-components/macro';
import { BackgroundContainer } from 'styled/LoginStyled';
import { CreditTxt, SortBtn } from 'styled/MainStyled';
import PostForm from './PostForm';
import HandleFav from './HandleFav';
import DltBtn from './DltBtn';
import EditPost from './EditPost';
import ImageBackground from '../images/img_profile.jpg';
import ProfileSearchFav from './ProfileSearchFav';
import likeIcon from '../icons/hand_dkblue.png';

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
        <GreetingText>Welcome {username}!</GreetingText>
        <BackgroundContainer>
          <BackgroundImg src={ImageBackground} />
          <CreditTxt>Photo by
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
          </CreditTxt>
        </BackgroundContainer>
        <IntroText>As a member of our community you can
          <strong> create and share a post, like other members&apos; posts </strong> and
          <strong> save your favorites</strong>.
          No matter if you are an experienced surfer or a newbie,
          <strong> everyone is welcome </strong>
          to contribute to <strong> our community </strong>.
        </IntroText>
        <IntroText>
          Enjoy your surf! / <i>Wave Finder Team</i>
        </IntroText>
        <ProfileH2>Create a post</ProfileH2>
        <PostForm />
        <ProfileH2>My posts</ProfileH2>
        <SortBtn
          key="sortBtn"
          type="button"
          onClick={() => handleSortMyPosts()}>
          {(currentSortOrder === 'desc') ? <p>Sort Old to New</p> : <p>Sort New to Old</p>}
        </SortBtn>
        <PostsWrapper>
          <InnerWrapperPosts>
            {useSelector((store) => store.surfPosts.createdByUserItems).map((item) => {
              return (
                <SinglePostWrapper key={item.id}>
                  <PostTopWrapper>
                    <Headline>{item.headline}</Headline>
                    <DltBtn id={item._id} />
                  </PostTopWrapper>
                  <Location>{item.location}</Location>
                  <p>{item.level}</p>
                  <EditPost message={item.message} id={item._id} />
                  <p>{new Date(item.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                  <LikeWrapper>
                    <LikeIcon src={likeIcon} alt="like icon" />
                    <p> x {item.numOfLikes}</p>
                  </LikeWrapper>
                </SinglePostWrapper>
              )
            })}
          </InnerWrapperPosts>
        </PostsWrapper>
        <ProfileH2>My favorite posts</ProfileH2>
        <ProfileSearchFav />
        <PostsWrapper>
          <InnerWrapperPosts>
            {useSelector((store) => store.surfPosts.filteredSavedFavItems).map((item) => {
              return (
                <SinglePostWrapper key={item.id}>
                  <Headline>{item.headline}</Headline>
                  <Location>{item.location}</Location>
                  <p>{item.level}</p>
                  <Message>{item.message}</Message>
                  <p>{new Date(item.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                  <LikeFavoriteWrapper>
                    <LikeWrapper>
                      <LikeIcon src={likeIcon} alt="like icon" />
                      <p> x {item.numOfLikes}</p>
                    </LikeWrapper>
                    <HandleFav id={item._id} />
                  </LikeFavoriteWrapper>
                </SinglePostWrapper>
              )
            })}
          </InnerWrapperPosts>
        </PostsWrapper>
      </InnerWrapper>
    </StyledMainWrapper>
  )
}

export default Profile