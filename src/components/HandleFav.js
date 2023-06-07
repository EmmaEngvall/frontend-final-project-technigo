/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import surfPosts from 'reducers/surfPosts';
import { API_URL } from 'utils/urls';

const HandleFav = ({ id }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const allItemsArray = useSelector((store) => store.surfPosts.allItems)
  const savedFavItems = useSelector((store) => store.surfPosts.savedFavItems)

  const handleAddFav = () => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL(`surfposts/${id}/addfav`), options)
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

          const updatedSavedFavItems = savedFavItems.filter(
            (item) => item._id !== data.response._id
          );

          dispatch(surfPosts.actions.setSavedFavItems(updatedSavedFavItems))
        } else {
          dispatch(surfPosts.actions.setError(data.response));
          dispatch(surfPosts.actions.setAllItems([]));
        }
      });
  }

  return (
    <button
      key="favBtn"
      type="submit"
      onClick={handleAddFav}
      disabled={(!accessToken)}>
      <p>🔖 Save as favorite</p>
    </button>
  )
};

export default HandleFav