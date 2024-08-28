import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../Styles/Moviesdetails.css";

const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=45885cea21babb8ba21b35ecfb61753b`
        );
        const data = await response.json();
        setMovie(data);

        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=45885cea21babb8ba21b35ecfb61753b`
        );
        const creditsData = await creditsResponse.json();
        setActors(creditsData.cast.slice(0, 10)); 
      } catch (error) {
        console.error('Error fetching movie details or cast:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movieDetails">
      <div className="upper-container">
      <div className="left-container">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="right-container">
        <h1>{movie.title}</h1>
        <p>Description : {movie.overview}</p>
        <p>Release Date : {movie.release_date}</p>
        <p>Country : {movie.origin_country}</p>
        <ul>
          <p>Type</p>
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre.name}</li>
          ))}
        </ul>
        <p>Budget : ${movie.budget}</p>
      </div>
      </div>
      <div className="actors-container">
        <h3>Top Cast:</h3>
        <div className="actors-list">
          {actors.length > 0 ? (
            actors.map((actor) => (
              <div key={actor.id} className="actor-card">
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
                <h4>{actor.name}</h4>
                <p>{actor.character}</p>
              </div>
            ))
          ) : (
            <p>No actors available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
