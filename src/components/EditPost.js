/* eslint-disable no-underscore-dangle */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import surfPosts from 'reducers/surfPosts';
import { Message } from 'styled/ProfileStyled';
import { API_URL } from 'utils/urls';

const EditPost = ({ message, id }) => {
  const dispatch = useDispatch();
  const updatedMsgRef = useRef(null);
  const [editing, setEditing] = useState(false);
  const accessToken = useSelector((store) => store.user.accessToken);
  const myItemsArray = useSelector((store) => store.surfPosts.createdByUserItems);

  const handleEdit = () => {
    setEditing(false);
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({
        message: updatedMsgRef.current.value
      })
    }

    fetch(API_URL(`surfposts/${id}/update`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(surfPosts.actions.setError(null));
          const updatedItems = myItemsArray.map((item) => {
            if (item._id === data.response._id) {
              return data.response
            }
            return item;
          });
          dispatch(surfPosts.actions.setCreatedByUserItems(updatedItems));
        } else {
          dispatch(surfPosts.actions.setError(data.response));
        }
      });
  }

  return (
    <div>
      {editing ? (
        <textarea defaultValue={message} ref={updatedMsgRef} />
      ) : (
        <Message>{message}</Message>
      )}
      {editing ? (
        <button type="button" onClick={() => setEditing(false)}>Cancel</button>
      ) : (
        <button type="button" onClick={() => setEditing(true)}>✍️Edit</button>
      )}
      {editing && <button type="submit" onClick={handleEdit}>Save</button>}
    </div>
  )
}

export default EditPost