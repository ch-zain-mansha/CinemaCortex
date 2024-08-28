import React from "react";
import "../Styles/movieCard.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ picture, name, date, reviews , id}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/MoviesDetails/${id}`);  
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={picture} alt={name} className="movie-card__image" />
      <div className="movie-card__content">
        <h2 className="movie-card__title">{name}</h2>
        <p className="movie-card__date">{date}</p>
        <div className="movie-card__reviews">
          <span className="movie-card__reviews-text">Rating:</span>
          <span className="movie-card__reviews-percent">{reviews} %</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
