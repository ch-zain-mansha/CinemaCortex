import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "../Styles/trending.css";
import { useNavigate } from "react-router-dom";

const Trending = ({ title, category }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${category}?api_key=45885cea21babb8ba21b35ecfb61753b`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTg4NWNlYTIxYmFiYjhiYTIxYjM1ZWNmYjYxNzUzYiIsIm5iZiI6MTcyNDM0ODcyOS41MDUxMywic3ViIjoiNjZjNzc4N2U5YzFmZmU4NGZhYjJlNWJmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.wXI6mZ9UBj0BWNwMGkfyMnmN9lrCVFInqUbQ1DtCVE0`,
            },
          }
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [category]);

  const handleCardClick = (id) => {
    navigate(`/MoviesDetails/${id}`);
  };

  return (
    <div className="trending">
      <h1>{title}</h1>
      <div className="trendingContent">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleCardClick(movie.id)}  
            >
              <MovieCard
                picture={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                name={movie.title}
                date={movie.release_date}
                reviews={Math.round(movie.vote_average * 10)} 
                id={movie.id} 
              />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Trending;
