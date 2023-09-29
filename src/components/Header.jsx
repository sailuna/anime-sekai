import React from "react";
import {Image, Navbar} from "react-bootstrap";
import animesekaiImage from "../images/animesekai.jpg";

/**
 * Header component displays the site header with a logo.
 */
const Header = () => {
  return (
    <Navbar expand="lg" className="mb-4 p-3 bg-gradient justify-content-center">
      <Navbar.Brand href="/" className="text-white border-nav text-center">
        <Image src={animesekaiImage} className="headerImage" alt="AnimeSekai" />
      </Navbar.Brand>
    </Navbar>
  );
};

export { Header };
