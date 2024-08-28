import React from 'react';
import Trending from './Trending';
import "../Styles/mainPage.css";

const MainPage = () => {
  return (
    <div className='mainPage'>
      <Trending title="Trending" category="trending/movie/day" />
      <Trending title="What's Popular" category="movie/popular" />
      <Trending title="Free to Watch" category="movie/top_rated" />
      <Trending title="Latest Trailers" category="movie/upcoming" />
    </div>
  );
};

export default MainPage;
