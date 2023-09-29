import * as React from "react";
import {Layout} from "../components/Layout";
import {Col, Container, Row} from "react-bootstrap";
import {Search} from "../components/Search";
import {navigate} from "gatsby";

/**
 * NotFoundPage is a React component for rendering a 404 error page.
 */
const NotFoundPage = () => {
  /**
   * onSubmit is a callback function triggered when the search form is submitted.
   * It uses the Gatsby navigate function to redirect to a results page with the provided search term.
   * @param {Object} data - The form data containing the search term.
   */
  const onSubmit = (data) => {
    navigate(`/results`, {
      state: { param: data.searchTerm },
    });
  };

  return (
    <Layout>
      <Container className="my-5">
        <Row>
          <Col className={"text-center text-white"}>
            <h1>Oops Page not found</h1>
          </Col>
        </Row>
        {/* Render the search component with the onSubmit callback */}
        <Search searchFunction={onSubmit} />
        <Row>
          <Col className={"text-center text-white"}>
            <h1>Go Back to homepage</h1>
            <a href={"/"} className={"text-white"}>
              Home
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
