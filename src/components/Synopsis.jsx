import React from "react";
import {Col, Row} from "react-bootstrap";

/**
 * Synopsis component displays the synopsis of an anime.
 *
 * @param {string} synopsis - The synopsis of the anime.
 */
const Synopsis = ({ synopsis }) => {
  return (
    <Row className="my-5">
      <Col className="text-white text-center">
        <h2 className="mb-3">Synopsis</h2>
        <p>{synopsis}</p>
      </Col>
    </Row>
  );
};

export { Synopsis };
