import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Popular from "./Components/Movies/Popular";
import NowPlaying from "./Components/Movies/NowPlaying";
import Upcoming from "./Components/Movies/Upcoming";
import TopRated from "./Components/Movies/TopRated";
import AiringToday from "./Components/TVShows/AiringToday";
import OnTV from "./Components/TVShows/OnTV";
import PopularPeople from "./Components/People/PopularPeople";
import Discussions from "./Components/More/Discussions";
import LeaderBoard from "./Components/More/LeaderBoard";
import Support from "./Components/More/Support";
import API from "./Components/More/API";
import TvPopular from "./Components/TVShows/Popular";
import TvTop from "./Components/TVShows/TopRated";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Movies/Popular" element={<Popular />} />
        <Route path="/Movies/NowPlaying" element={<NowPlaying />} />
        <Route path="/Movies/Upcoming" element={<Upcoming />} />
        <Route path="/Movies/TopRated" element={<TopRated />} />
        <Route path="/TVShows/Popular" element={<TvPopular />} />
        <Route path="/TVShows/AiringToday" element={<AiringToday />} />
        <Route path="/TVShows/OnTV" element={<OnTV />} />
        <Route path="/TVShows/TopRated" element={<TvTop />} />
        <Route path="/People/PopularPeople" element={<PopularPeople />} />
        <Route path="/More/Discussions" element={<Discussions />} />
        <Route path="/More/LeaderBoard" element={<LeaderBoard />} />
        <Route path="/More/Support" element={<Support />} />
        <Route path="/More/API" element={<API />} />
      </Routes>
    </Router>
  );
}

export default App;
