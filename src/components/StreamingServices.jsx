import React from "react";
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";

/**
 * StreamingServices component displays a list of streaming services.
 *
 * @param {Array} stream - An array of streaming service objects.
 */
const StreamingServices = ({ stream }) => {
  return (
    <Row className="my-5">
      <Col xs={12} className="text-white text-center">
        <h2>Currently streaming</h2>
      </Col>
      <Col xs={12} className="my-5">
        <Row className="justify-content-center">
          {stream.map((service, index) => {
            const { name, url } = service;
            return (
              <Col lg={4} key={index} className="mb-4 text-center">
                <Card className="bg-white">
                  <Card.Title>{name}</Card.Title>
                  <Card.Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info-emphasis"
                  >
                    Watch now!
                  </Card.Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export { StreamingServices };
