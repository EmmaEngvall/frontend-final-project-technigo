import { createSlice } from '@reduxjs/toolkit';

const surfPosts = createSlice({
  name: 'surfPosts',
  initialState: {
    allItems: [],
    filteredItems: [],
    createdByUserItems: [],
    savedFavItems: [],
    filteredSavedFavItems: [],
    error: null
  },
  reducers: {
    setError: (store, action) => {
      store.error = action.payload;
    },
    setAllItems: (store, action) => {
      store.allItems = action.payload;
    },
    setFilteredItems: (store, action) => {
      store.filteredItems = action.payload;
    },
    setCreatedByUserItems: (store, action) => {
      store.createdByUserItems = action.payload;
    },
    setSavedFavItems: (store, action) => {
      store.savedFavItems = action.payload;
    },
    setFilteredSavedFavItems: (store, action) => {
      store.filteredSavedFavItems = action.payload;
    },
    addPost: (store, action) => {
      store.allItems.unshift(action.payload);
      store.createdByUserItems.unshift(action.payload);
    }
  }
});

export default surfPosts