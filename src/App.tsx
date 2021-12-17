import React from "react";
import Home from "./pages/home";
import Nav from "./components/header/navbar";
import CovidToday from "./pages/covidToday";
import Search from "./pages/search";

import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

const App: React.FC = () => {
  return (
    <Box>
      <Nav />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CovidToday />} path="/covid19page" />
        <Route element={<Search />} path="/search" />
      </Routes>
    </Box>
  );
};

export default App;
