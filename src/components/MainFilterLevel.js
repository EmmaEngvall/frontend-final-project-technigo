import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import surfPosts from 'reducers/surfPosts';

const MainFilterLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const dispatch = useDispatch();
  const orignalItems = useSelector((store) => store.surfPosts.allItems)
  const filterAllItems = useSelector((store) => store.surfPosts.filteredItems)
  const filterPostByLevel = (level) => {
    let filteredItems = [];

    if (level === 'beginner' || level === 'intermediate' || level === 'advanced') {
      filteredItems = filterAllItems.filter((item) => item.level === level);
    } else {
      filteredItems = orignalItems;
    }

    dispatch(surfPosts.actions.setFilteredItems(filteredItems));
  }

  const handleFilterChanges = (event) => {
    const level = event.target.value;
    setSelectedLevel(level);

    filterPostByLevel(level);
  }

  return (
    <select onChange={handleFilterChanges} value={selectedLevel}>
      <option value="" selected="disabled">Sort on level</option>
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
      <option value="all">All levels</option>
    </select>
  )
}

export default MainFilterLevel