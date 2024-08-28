import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Popular from "./Components/Movies/Popular";
import PopularPeople from "./Components/People/PopularPeople";
import AboutUs from "./Components/More/About";
import ContactUs from "./Components/More/Contact";
import Privacy from "./Components/More/Privacy";
import Terms from "./Components/More/Terms";
import MainPage from "./Components/MainPage";
import MoviesDetails from "./Components/MoviesDetails";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Movies/Popular" element={<Popular title={"Popular Movies"} category="movie/popular"/>} />
        <Route path="/Movies/NowPlaying" element={<Popular title={"Now Playing Movies"} category="movie/now_playing"/>} />
        <Route path="/Movies/Upcoming" element={<Popular title={"Upcoming Movies"} category="movie/upcoming"/>} />
        <Route path="/Movies/TopRated" element={<Popular title={"Top Rated Movies"} category="movie/top_rated"/>} />
        <Route path="/TVShows/Popular" element={<Popular title={"Popular TV Shows"} category="tv/popular"/>} />
        <Route path="/TVShows/AiringToday" element={<Popular title={"TV Shows Airing Today"} category="tv/airing_today"/>} />
        <Route path="/TVShows/OnTV" element={<Popular title={"On TV"} category="tv/on_the_air"/>} />
        <Route path="/TVShows/TopRated" element={<Popular title={"Top Rated TV Shows"} category="tv/top_rated"/>} />
        <Route path="/People/PopularPeople" element={<PopularPeople title={"Popular People"}/>} />
        <Route path="/More/AboutUs" element={<AboutUs title={"About Us"}/>} />
        <Route path="/More/ContactUs" element={<ContactUs title={"Contact Us"}/>} />
        <Route path="/More/PrivacyPolicy" element={<Privacy title={"Privacy Policy"}/>} />
        <Route path="/More/Terms&Conditions" element={<Terms title={"Terms & Conditions"}/>} />
        <Route path="/MoviesDetails/:id" element={<MoviesDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
