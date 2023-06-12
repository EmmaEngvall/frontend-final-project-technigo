import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import user from 'reducers/user';
import surfPosts from 'reducers/surfPosts';
import About from 'components/About';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Header from 'components/Header';
import LogIn from 'components/LogIn';
import SingleArticle from 'components/SingleArticle';
import Profile from 'components/Profile';
import NotFound from 'components/NotFound';
import Main from 'components/Main';
import GlobalStyled from 'styled/GlobalStyled';

export const App = () => {
  const reducer = combineReducers({
    user: user.reducer,
    surfPosts: surfPosts.reducer
  });
  const store = configureStore({ reducer })
  return (
    <>
      <GlobalStyled />
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/singleArticle/:id" element={<SingleArticle />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}