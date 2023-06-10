import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import surfPosts from 'reducers/surfPosts';

const MainSortOldNewBtn = () => {
  const [currentSortOrder, setCurrentSortOrder] = useState('desc')
  const allSurfPosts = useSelector((store) => store.surfPosts.filteredItems);
  const dispatch = useDispatch();

  const handleSortAllPosts = () => {
    const filteredAllPosts = [...allSurfPosts];
    let nextSortOrder;

    if (currentSortOrder === 'asc') {
      filteredAllPosts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt)
        return dateB - dateA;
      });
      nextSortOrder = 'desc';
    } else {
      filteredAllPosts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateA - dateB;
      });
      nextSortOrder = 'asc';
    }
    dispatch(surfPosts.actions.setFilteredItems(filteredAllPosts));
    setCurrentSortOrder(nextSortOrder);
  };

  return (
    <button
      key="sortBtn"
      type="button"
      onClick={handleSortAllPosts}>
      {(currentSortOrder === 'desc') ? 'Show Old to New' : 'Show New to Old'}
    </button>
  )
}

export default MainSortOldNewBtn