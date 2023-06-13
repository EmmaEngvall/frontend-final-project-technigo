import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import surfPosts from 'reducers/surfPosts';
import { SortLocation } from 'styled/MainStyled';

const ProfileSearchFav = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const dispatch = useDispatch();
  const originalMyFavPost = useSelector((store) => store.surfPosts.savedFavItems);

  const filterPostByLocation = (location) => {
    let filteredItems = [];

    if (location) {
      filteredItems = originalMyFavPost.filter((item) => item.location === location);
    } else {
      filteredItems = originalMyFavPost;
    }

    dispatch(surfPosts.actions.setFilteredSavedFavItems(filteredItems));
  }

  const handleFilterChanges = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);

    filterPostByLocation(location);
  }

  const uniqueLocations = [...new Set(originalMyFavPost.map((items) => items.location))];

  return (
    <SortLocation onChange={handleFilterChanges} value={selectedLocation}>
      <option value="" disabled>Filter by location</option>
      <option value="">Show all favourites</option>
      {uniqueLocations
        .sort((a, b) => a.localeCompare(b))
        .map((item) => {
          return (
            <option key={item} value={item}>{item}</option>
          )
        })}
    </SortLocation>
  )
}

export default ProfileSearchFav