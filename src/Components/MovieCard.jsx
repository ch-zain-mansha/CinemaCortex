import React from "react";
import "../Styles/movieCard.css"; 

const MovieCard = () => {
  const movie = {
    picture: "https://via.placeholder.com/300x180?text=Movie+Poster",
    name: "The Great Adventure",
    date: "2024-08-21",
    reviews: "85"
  };

  return (
    <div className="movie-card">
      <img src={movie.picture} alt={movie.name} className="movie-card__image" />
      <div className="movie-card__content">
        <h2 className="movie-card__title">{movie.name}</h2>
        <p className="movie-card__date">{movie.date}</p>
        <div className="movie-card__reviews">
          <span className="movie-card__reviews-text">Rating:</span>
          <span className="movie-card__reviews-percent">{movie.reviews} %</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
