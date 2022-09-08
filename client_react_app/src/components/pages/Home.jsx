import React from "react";

// * stylesheet imports
import "../../styles/pages/Homepage.css";

// * component imports
// ! temporarily here for component building only
// ! due for removal once complete
import OrderModal from "../modals/OrderModal.jsx";

const HomePage = () => {
  return (
    <div className="[ home-page-wrapper ] [ page-wrapper display-type-flex ]">
      <OrderModal />
    </div>
  );
};

export default HomePage;

// TODO: flesh out page elements with relative components
// TODO: stylesheet
// TODO: remove OrderModal and once component is complete
