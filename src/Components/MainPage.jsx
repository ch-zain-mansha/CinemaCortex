import React from 'react';
import Header from './Header';
import Trending from './Trending';
import Footer from './Footer';

import "../Styles/mainPage.css";

const MainPage = () => {
  return (
    <div className='mainPage'>
      <Header />
      <Trending title={"Trending"}/>
      <Trending title={"What's Popular"}/>
      <Trending title={"Free to Watch"}/>
      <Trending title={"Latest Trailers"}/>
      <Footer />
    </div>
  )
}

export default MainPage