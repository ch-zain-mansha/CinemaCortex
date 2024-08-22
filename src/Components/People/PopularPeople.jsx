import React from 'react';
import "../../Styles/People/popularPeople.css";
import Footer from '../Footer';

const PopularPeople = () => {
  return (
    <div className='people-container'>
    <RowOfPeople />
    <RowOfPeople />
    <RowOfPeople />
    <RowOfPeople />
    <RowOfPeople />
    <RowOfPeople />
    <Footer />
    </div>
  );
};

const PeopleCard = ({ imgSrc, name, description }) => {
  return (
    <div className="people-card">
      <img src={imgSrc} alt={name} className="people-image" />
      <h2 className="people-name">{name}</h2>
      <p className="people-description">{description}</p>
    </div>
  );
};



const RowOfPeople = () => {
  return (
    <div className='row'>
        <PeopleCard 
        imgSrc="https://via.placeholder.com/150" 
        name="John Doe" 
        description="An actor known for his outstanding performances in various movies." 
      />
      <PeopleCard 
        imgSrc="https://via.placeholder.com/150" 
        name="Jane Smith" 
        description="A versatile actress who has won numerous awards." 
      />
        <PeopleCard 
        imgSrc="https://via.placeholder.com/150" 
        name="John Doe" 
        description="An actor known for his outstanding performances in various movies." 
      />
      <PeopleCard 
        imgSrc="https://via.placeholder.com/150" 
        name="Jane Smith" 
        description="A versatile actress who has won numerous awards." 
      />
        <PeopleCard 
        imgSrc="https://via.placeholder.com/150" 
        name="John Doe" 
        description="An actor known for his outstanding performances in various movies." 
      />
    </div>
  )
}



export default PopularPeople;
