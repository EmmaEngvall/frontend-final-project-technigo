/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import surfPosts from 'reducers/surfPosts';
import { API_URL } from 'utils/urls';

const HandleFav = ({ id }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const allItemsArray = useSelector((store) => store.surfPosts.allItems);
  const savedFavItems = useSelector((store) => store.surfPosts.savedFavItems);
  const filteredSavedFavItems = useSelector((store) => store.surfPosts.filteredSavedFavItems);
  const userId = useSelector((store) => store.user.userId)
  const [favoriteButtonText, setFavoriteButtonText] = useState('');

  useEffect(() => {
    const post = allItemsArray.find((item) => item._id === id);

    const isFavorite = post.savedFavBy.includes(userId);

    if (isFavorite) {
      setFavoriteButtonText('❌ Remove favorite');
    } else {
      setFavoriteButtonText('🔖 Save as favorite');
    }
  }, [allItemsArray, id, userId])

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

          const updatedFilteredSavedFavItems = filteredSavedFavItems.filter(
            (item) => item._id !== data.response._id
          );

          dispatch(surfPosts.actions.setSavedFavItems(updatedSavedFavItems));
          dispatch(surfPosts.actions.setFilteredSavedFavItems(updatedFilteredSavedFavItems));
        } else {
          dispatch(surfPosts.actions.setError(data.response));
          dispatch(surfPosts.actions.setAllItems([]));
        }
      });
  }

  return (
    <div className="tooltip">
      <button
        key="favBtn"
        type="submit"
        onClick={handleAddFav}
        disabled={(!accessToken)}>
        <p>{favoriteButtonText}</p>
        {(!accessToken) && <span className="tooltiptext">Become a member to save a favorite</span>}
      </button>
    </div>
  )
};

export default HandleFav