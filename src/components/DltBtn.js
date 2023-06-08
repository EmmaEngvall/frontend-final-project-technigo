/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import surfPosts from 'reducers/surfPosts';
import { API_URL } from 'utils/urls';

const DltBtn = ({ id }) => {
  const dispatch = useDispatch();
  const [cfmDlt, setCfmDlt] = useState(false);
  const accessToken = useSelector((store) => store.user.accessToken);
  const myItemsArray = useSelector((store) => store.surfPosts.createdByUserItems);

  const handleDlt = () => {
    setCfmDlt(false);
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
    <div>
      {(cfmDlt) ? (
        <button type="button" onClick={() => setCfmDlt(false)}>NO</button>
      ) : (
        <button type="button" onClick={() => setCfmDlt(true)}><p>🗑️Delete post</p></button>
      )} {(cfmDlt) && (
        <button
          key="dltBtn"
          type="submit"
          onClick={handleDlt}>
          <p>Yes</p>
        </button>)}
    </div>
  )
};

export default DltBtn