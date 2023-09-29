import React from "react";
import {Col, Image, Row} from "react-bootstrap";

/**
 * Reviews component displays a list of reviews.
 *
 * @param {Array} reviews - An array of review objects.
 */
const Reviews = ({ reviews }) => {
  return (
    <Row className="my-5">
      <Col xs={12} className="text-white text-center">
        <h2>Reviews</h2>
      </Col>
      <Col xs={12} className="my-5">
        <Row className="px-0">
          {reviews.length > 0 &&
            reviews.map((review, index) => {
              const {
                review: reviewContent,
                user: {
                  username,
                  images: {
                    jpg: { image_url },
                  },
                },
              } = review;
              return (
                <Col
                  xs={12}
                  key={index}
                  className={`pb-3 border-bottom border-secondary ${
                    index % 2 === 0 ? "border-end" : "border-start"
                  }`}
                >
                  <Row className="mt-2">
                    <Col xs={3} md={2} lg={1}>
                      <Image src={image_url} height={70} alt={username} />
                    </Col>
                    <Col>
                      <p className="text-white">{username}</p>
                      <p className="bg-transparent text-white">
                        {reviewContent}
                      </p>
                    </Col>
                  </Row>
                </Col>
              );
            })}
        </Row>
      </Col>
    </Row>
  );
};

export { Reviews };
