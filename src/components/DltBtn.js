/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import surfPosts from 'reducers/surfPosts';
import { API_URL } from 'utils/urls';

const DltBtn = ({ id }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const myItemsArray = useSelector((store) => store.surfPosts.createdByUserItems);

  const handleDlt = () => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL(`surfposts/${id}/delete`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(surfPosts.actions.setError(null));
          const updatedItems = myItemsArray.filter((item) => item._id !== id);
          dispatch(surfPosts.actions.setCreatedByUserItems(updatedItems));
        } else {
          dispatch(surfPosts.actions.setError(data.response));
        }
      });
  }

  return (
    <button
      key="dltBtn"
      type="submit"
      onClick={handleDlt}>
      <p>🗑️Delete post</p>
    </button>
  )
};

export default DltBtn