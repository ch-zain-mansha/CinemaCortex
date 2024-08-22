import React from 'react';
import "../../Styles/Movies/popular.css";
import MoviesCard from "../MovieCard";
import Footer from "../Footer";

const Popular = ({title}) => {
  return (
    <div className='popular'>
      <h1>{title}</h1>
      <RowComp />
      <RowComp />
      <RowComp />
      <RowComp />
      <RowComp />
      <Footer />
    </div>
  );
};

const RowComp = () => {
  return (
    <div className="row">
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </div>
  );
};

export default Popular;
