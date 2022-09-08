import React from "react";

// * imports for page routing and the relative component
import { BrowserRouter } from "react-router-dom";
import BrowserRoutes from "./BrowserRoutes.jsx";

// * main stylesheet for the app, for the moment only contains a css reset
import "./App.css";

// * abstract stylesheet imports
import "./styles/abstracts/animations.css";
import "./styles/abstracts/colors.css";
import "./styles/abstracts/decorative.css";
import "./styles/abstracts/fonts.css";
import "./styles/abstracts/layout.css";

// * static element imports
import Footer from "./components/static elements/Footer.jsx";
import Header from "./components/static elements/Header.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <BrowserRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
