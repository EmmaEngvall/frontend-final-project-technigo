import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import surfPosts from 'reducers/surfPosts';
import { API_URL } from 'utils/urls';
import { ResetButton, StyledForm, SubmitButton } from 'styled/PostFormStyled';

const PostForm = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const [headline, setHeadline] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [level, setLevel] = useState('');

  const onPostSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({
        headline,
        message,
        location,
        level
      })
    }
    fetch(API_URL('surfposts'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const newPost = data.response;
          dispatch(surfPosts.actions.addPost(newPost))
          setHeadline('');
          setLocation('');
          setMessage('');
          setLevel('');
        } else {
          console.log('submission failed')
        }
      })
      .catch((error) => {
        console.error('an error occured:', error);
      });
  };

  const handleReset = () => {
    setHeadline('');
    setLocation('');
    setMessage('');
  };

  return (
    <StyledForm onSubmit={onPostSubmit}>
      <label htmlFor="headline">Title
        <input
          type="text"
          id="headline"
          value={headline}
          placeholder="Name your post"
          onChange={(e) => setHeadline(e.target.value)} />
      </label>
      <label htmlFor="location">Location
        <input
          type="text"
          id="location"
          value={location}
          placeholder="Where in the world did you surf?"
          onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label htmlFor="beginner">Beginner
        <input
          type="radio"
          id="beginner"
          checked={level === 'beginner'}
          onChange={() => setLevel('beginner')} />
      </label>
      <label htmlFor="intermediate">Intermediate
        <input
          type="radio"
          id="intermediate"
          checked={level === 'intermediate'}
          onChange={() => setLevel('intermediate')} />
      </label>
      <label htmlFor="advanced">Advanced
        <input
          type="radio"
          id="advanced"
          checked={level === 'advanced'}
          onChange={() => setLevel('advanced')} />
      </label>
      <label htmlFor="message">Message
        <textarea
          className="message"
          id="message"
          value={message}
          placeholder="How was the surf?"
          rows="10"
          cols="40"
          maxLength={500}
          onChange={(e) => setMessage(e.target.value)} />
      </label>
      <SubmitButton type="submit">Submit</SubmitButton>
      <ResetButton
        type="button"
        onClick={handleReset}>
        Reset
      </ResetButton>
    </StyledForm>
  )
}

export default PostForm