import React from "react";
import {Col, Row} from "react-bootstrap";

/**
 * Footer component displays the footer content.
 */
const Footer = () => {
  return (
    <Row className="text-center text-white">
      <Col xs={12}>
        <p>Powered by Jikan API v4 ✨</p>
      </Col>
      <Col xs={12} className="mb-3">
        <a
          href="http://discord.jikan.moe"
          target="_blank"
          className="pb-1 text-white"
          rel="noopener noreferrer"
        >
          Discord
        </a>
      </Col>
      <Col xs={12}>
        <p>License: MIT Terms of Service</p>
      </Col>
    </Row>
  );
};

export { Footer };
