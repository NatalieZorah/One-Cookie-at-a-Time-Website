import React from "react";

// * router imports
import { Route, Routes } from "react-router-dom";

// * page imports
import Home from "./components/pages/Home.jsx";
import Cookies from "./components/pages/Cookies.jsx";
import Breads from "./components/pages/Breads.jsx";
import Bars from "./components/pages/Bars.jsx";

const BrowserRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/breads" element={<Breads />} />
        <Route path="/bars" element={<Bars />} />
      </Routes>
    </>
  );
};

export default BrowserRoutes;
