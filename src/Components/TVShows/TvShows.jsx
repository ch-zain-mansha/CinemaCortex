import React, { useEffect, useState } from "react";
import "../../Styles/Movies/popular.css";
import MovieCard from "../MovieCard";  
import Footer from "../Footer";

const TvShows = ({ title, category }) => {
  const [tvshows, settvshows] = useState([]);

  useEffect(() => {
    const fetchtvshows = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${category}?api_key=45885cea21babb8ba21b35ecfb61753b`
        );
        const data = await response.json();
        settvshows(data.results);
      } catch (error) {
        console.error("Error fetching TV shows:", error);
      }
    };

    fetchtvshows();
  }, [category]);

  return (
    <div className="popular">
      <h1>{title}</h1>
      <div className="popularContent">
        {tvshows.length > 0 ? (
          tvshows.map((tvshow) => (
            <MovieCard
              key={tvshow.id}
              picture={`https://image.tmdb.org/t/p/w300${tvshow.poster_path}`}
              name={tvshow.name} 
              date={tvshow.first_air_date}
              reviews={Math.round(tvshow.vote_average * 10)}  
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TvShows;
