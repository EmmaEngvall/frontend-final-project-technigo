/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import surfPosts from 'reducers/surfPosts';
import { CancelDltBtn, ConfirmDltBtn, DeleteBtn, DeleteIcon, ConfirmDltWrapper, ConfirmDltWrapperP } from 'styled/ProfileStyled';
import { API_URL } from 'utils/urls';
import deleteIcon from '../icons/delete_icon.png'

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
        <ConfirmDltWrapper>
          <ConfirmDltWrapperP>Delete?</ConfirmDltWrapperP>
          <CancelDltBtn type="button" onClick={() => setCfmDlt(false)}>NO</CancelDltBtn>
          <ConfirmDltBtn
            key="dltBtn"
            type="submit"
            onClick={handleDlt}>
            YES
          </ConfirmDltBtn>
        </ConfirmDltWrapper>
      ) : (
        <DeleteBtn type="button" onClick={() => setCfmDlt(true)}><DeleteIcon src={deleteIcon} alt="delete icon" /></DeleteBtn>
      )}
    </div>
  )
};

export default DltBtn