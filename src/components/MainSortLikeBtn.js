import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import surfPosts from 'reducers/surfPosts';

const MainSortOnLikes = () => {
  const [currentSortOrder, setCurrentSortOrder] = useState('desc')
  const allSurfPosts = useSelector((store) => store.surfPosts.filteredItems);
  const dispatch = useDispatch();

  const handleSortOnLikes = () => {
    const filteredAllPosts = [...allSurfPosts];
    let nextSortOrder;

    if (currentSortOrder === 'reset') {
      filteredAllPosts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
      nextSortOrder = 'desc';
    } else {
      filteredAllPosts.sort((a, b) => {
        return b.numOfLikes - a.numOfLikes;
      });
      nextSortOrder = 'reset';
    }
    dispatch(surfPosts.actions.setFilteredItems(filteredAllPosts));
    setCurrentSortOrder(nextSortOrder);
  };

  return (
    <button
      key="sortBtn"
      type="button"
      onClick={handleSortOnLikes}>
      {(currentSortOrder === 'reset') ? 'reset filter' : 'sort on most Likes'}
    </button>
  )
}

export default MainSortOnLikes