import { createSlice } from '@reduxjs/toolkit';

const surfPosts = createSlice({
  name: 'surfPosts',
  initialState: {
    allItems: [],
    createdByUserItems: [],
    savedFavItems: [],
    error: null
  },
  reducers: {
    setError: (store, action) => {
      store.error = action.payload;
    },
    setAllItems: (store, action) => {
      store.allItems = action.payload;
    },
    setCreatedByUserItems: (store, action) => {
      store.createdByUserItems = action.payload;
    },
    setSavedFavItems: (store, action) => {
      store.savedFavItems = action.payload;
    },
    addPost: (store, action) => {
      store.items.push(action.payload);
    }
  }
});

export default surfPosts