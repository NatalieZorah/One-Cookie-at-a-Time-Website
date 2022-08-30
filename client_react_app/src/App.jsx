import React from "react";
import "./App.css";

// * abstract stylesheet imports
import "./styles/abstracts/animations.css";
import "./styles/abstracts/colors.css";
import "./styles/abstracts/decorative.css";
import "./styles/abstracts/fonts.css";
import "./styles/abstracts/layout.css";

// * static element imports
// @ts-ignore
import Footer from "./components/static elements/Footer.jsx";
// @ts-ignore
import Header from "./components/static elements/Header.jsx";
// @ts-ignore
import Nav from "./components/static elements/Navigation.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Footer />
    </div>
  );
}

export default App;
