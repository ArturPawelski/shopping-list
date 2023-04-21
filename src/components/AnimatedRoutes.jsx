import React from "react";

import Home from "./Home/Home";
import CreatingList from "./Lista/List";
import Foods from "./Meals/Meals";
import YourLists from "./YourLists/YourLists";
import Login from "./Login/Login";

import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<CreatingList />} />
        <Route path="/meals" element={<Foods />} />
        <Route path="/yourlists" element={<YourLists />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1 h1> 404 error </h1>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
