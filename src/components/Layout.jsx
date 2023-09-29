import React from "react";
import {Container} from "react-bootstrap";
import {Footer} from "./Footer";
import {Header} from "./Header";

/**
 * Layout component provides a common structure for pages.
 *
 * @param {React.ReactNode} children - The content to be displayed within the layout.
 */
const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export { Layout };
