import React, { useEffect, useState } from 'react';
import "../../Styles/People/popularPeople.css";
import Footer from '../Footer';

const PopularPeople = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPopularPeople = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/popular?api_key=45885cea21babb8ba21b35ecfb61753b`
        );
        const data = await response.json();
        setPeople(data.results);
      } catch (error) {
        console.error("Error fetching popular people:", error);
      }
    };

    fetchPopularPeople();
  }, []);

  return (
    <div className='people-container'>
      {people.length > 0 ? (
        people.map((person, index) => (
          <RowOfPeople key={index} people={people.slice(index * 5, (index + 1) * 5)} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const PeopleCard = ({ imgSrc, name }) => {
  return (
    <div className="people-card">
      <img src={imgSrc} alt={name} className="people-image" />
      <h2 className="people-name">{name}</h2>
    </div>
  );
};

const RowOfPeople = ({ people }) => {
  return (
    <div className='row'>
      {people.map((person) => (
        <PeopleCard
          key={person.id}
          imgSrc={person.profile_path ? `https://image.tmdb.org/t/p/w300${person.profile_path}` : 'https://via.placeholder.com/150'}
          name={person.name}
        />
      ))}
    </div>
  );
};

export default PopularPeople;
