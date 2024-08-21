import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left-content">
        <h1 className="title">
          <span className="title-circle"></span>
          CinemaCortex
        </h1>
      </div>
      <div className="navbar-right-content">
        <Dropdown label={"Movies"} link1={"Popular"} link2={"NowPlaying"} link3={"Upcoming"} link4={"TopRated"} />
        <Dropdown label={"TVShows"} link1={"Popular"} link2={"AiringToday"} link3={"OnTV"} link4={"TopRated"} />
        <Dropdown label={"People"} link1={"PopularPeople"} />
        <Dropdown label={"More"} link1={"Discussions"} link2={"LeaderBoard"} link3={"Support"} link4={"API"} />
      </div>
    </div>
  );
};

const Dropdown = ({ label, link1, link2, link3, link4 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  return (
    <li
      className="nav-item"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <span className="dropdown-button">{label}</span>

      {isOpen && (
        <div className="dropdown-menu">
          {link1 && (
            <Link to={`/${label}/${link1}`} className="dropdown-item">
              {link1}
            </Link>
          )}
          {link2 && (
            <Link to={`/${label}/${link2}`} className="dropdown-item">
              {link2}
            </Link>
          )}
          {link3 && (
            <Link to={`/${label}/${link3}`} className="dropdown-item">
              {link3}
            </Link>
          )}
          {link4 && (
            <Link to={`/${label}/${link4}`} className="dropdown-item">
              {link4}
            </Link>
          )}
        </div>
      )}
    </li>
  );
};

export default Navbar;
