import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import surfPosts from 'reducers/surfPosts';

const MainFilterLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const dispatch = useDispatch();
  const originalItems = useSelector((store) => store.surfPosts.allItems);
  const filteredItemsState = useSelector((store) => store.surfPosts.filteredItems);

  const filterPostByLevel = useCallback((level, location) => {
    let filteredItems = originalItems;

    if (level !== 'all') {
      filteredItems = filteredItems.filter((item) => item.level === level);
    }
    if (location !== 'all') {
      filteredItems = filteredItems.filter((item) => item.location === location);
    }

    dispatch(surfPosts.actions.setFilteredItems(filteredItems));
  }, [dispatch, originalItems]);

  useEffect(() => {
    filterPostByLevel(selectedLevel, selectedLocation);
  }, [selectedLevel, selectedLocation, filterPostByLevel])

  const handleLevelChanges = (event) => {
    const level = event.target.value;
    setSelectedLevel(level);

    if (level === 'all' && selectedLocation === 'all') {
      dispatch(surfPosts.actions.setFilteredItems(originalItems))
    }
  }

  const handleLocationChanges = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);

    if (location === 'all' && selectedLevel === 'all') {
      dispatch(surfPosts.actions.setFilteredItems(originalItems))
    }
  }

  // extract uniqueLocations from filteredItems, we map and use the Set object to elimante dulicates
  // Spread operator to convert the Set object back to an array
  const uniqueLocations = [...new Set(filteredItemsState.map((items) => items.location))];
  const uniqueLevels = [...new Set(filteredItemsState.map((items) => items.level))];

  return (
    <div>
      <div>
        <label htmlFor="levelSelect">Sort on level
          <select onChange={handleLevelChanges} value={selectedLevel}>
            <option value="all" disabled>Sort on level</option>
            <option value="all">All levels</option>
            {uniqueLevels.map((level) => {
              return (
                <option key={level} value={level}>{level}</option>
              )
            })}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="locationSelect">Sort on location
          <select onChange={handleLocationChanges} value={selectedLocation}>
            <option value="all" disabled>Filter by location</option>
            <option value="all">Clear filter</option>
            {uniqueLocations.map((location) => {
              return (
                <option key={location} value={location}>{location}</option>
              )
            })}
          </select>
        </label>
      </div>
    </div>
  )
}

export default MainFilterLevel