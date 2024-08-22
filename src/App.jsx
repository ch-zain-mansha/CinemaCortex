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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Movies/Popular" element={<Popular title={"Popular"}/>} />
        <Route path="/Movies/NowPlaying" element={<Popular title={"Now Playing"}/>} />
        <Route path="/Movies/Upcoming" element={<Popular title={"Upcoming"}/>} />
        <Route path="/Movies/TopRated" element={<Popular title={"Top Rated"}/>} />
        <Route path="/TVShows/Popular" element={<Popular title={"Popular"}/>} />
        <Route path="/TVShows/AiringToday" element={<Popular title={"Airing Today"}/>} />
        <Route path="/TVShows/OnTV" element={<Popular title={"On TV"}/>} />
        <Route path="/TVShows/TopRated" element={<Popular title={"Top Rated"}/>} />
        <Route path="/People/PopularPeople" element={<PopularPeople title={"Popular People"}/>} />
        <Route path="/More/AboutUs" element={<AboutUs title={"About Us"}/>} />
        <Route path="/More/ContactUs" element={<ContactUs title={"Contact Us"}/>} />
        <Route path="/More/PrivacyPolicy" element={<Privacy title={"Privacy Policy"}/>} />
        <Route path="/More/Terms&Conditions" element={<Terms title={"Terms & Conditions"}/>} />
      </Routes>
    </Router>
  );
}

export default App;
