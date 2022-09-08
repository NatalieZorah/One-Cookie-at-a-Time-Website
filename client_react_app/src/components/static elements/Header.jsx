import React from "react";

// * static element imports
import Nav from "./Navigation.jsx";

const Header = () => {
  return (
    <div className="[ header-wrapper ] [ element-wrapper ]">
      <h4 className="[ header-title ]">One Cookie at a Time</h4>
      <Nav />
    </div> // header-wrapper
  );
};

export default Header;
