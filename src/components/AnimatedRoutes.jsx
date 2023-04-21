import React from "react";

import Home from "./Home/Home";
import CreatingList from "./Lista/Lista";
import Foods from "./Posilki/Posilki";
import YourLists from "./TwojeListy/TwojeListy";
import Login from "./Login/Login";

import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<CreatingList />} />
        <Route path="/posilki" element={<Foods />} />
        <Route path="/twojelisty" element={<YourLists />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1 h1> 404 error </h1>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
