import React from "react";

const Footer = () => {
  return (
    <div
      className="[ footer-wrapper ] 
                 [ element-wrapper display-type-grid grid-columns-2 gap-spacing-2 ] 
                 [ list-style-none ]"
    >
      <ul className="[ contact-info-list ]">
        <li className="[ contact-info-email ] [ contact-info-item ]">
          OneCookieAtATime@gmail.com
        </li>
        <li className="[ contact-info-phone ] [ contact-info-item ]">
          <a href="tel:+">(999)999-9999</a>
        </li>
        <li className="[ contact-info-address ] [ contact-info-item ]">
          <a href="https://www.google.com">1234 Nowhere St, Kalamazoo MI</a>
        </li>
      </ul>
      <ul className="[ social-link-list ]">
        <li className="[ social-link-facebook ] [ display-type-inline ]"></li>
        <li className="[ social-link-twitter ] [ display-type-inline ]"></li>
      </ul>
    </div> // footer-wrapper
  );
};

export default Footer;

// TODO: setup email for orders
// TODO: stylesheet
// TODO: set up social links with font awesome icons and link to homepages
