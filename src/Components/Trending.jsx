import React from 'react';
import ContentCards from './MovieCard';

import "../Styles/trending.css";

const Trending = ({title}) => {
  return (
    <div className='trending'>
        <h1>{title}</h1>
        <div className="trendingContent">
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        </div>
    </div>
  )
}

export default Trending