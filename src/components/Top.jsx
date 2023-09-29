import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import LoadableTinySlider, {settings} from "./LoadableTinySlider";

/**
 * Top component displays a list of top anime.
 *
 * @param {Array} top - An array of top anime objects.
 */
const Top = ({ top }) => {
  return (
    <Row className="my-5">
      <Col>
        <h1 className="text-white text-center">Top Anime</h1>
      </Col>
      <LoadableTinySlider settings={settings}>
        {top.map((anime, index) => {
          const {
            images: {
              jpg: { large_image_url },
            },
            mal_id,
          } = anime;

          // Check if a valid image URL is available
          if (large_image_url) {
            return (
              <div style={{ position: "relative" }} key={index}>
                <a
                  href={`/anime/?${mal_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    src={large_image_url}
                    className="shadowedNBorder"
                    height={400}
                    alt={`Top Anime ${index + 1}`}
                  />
                </a>
              </div>
            );
          }

          return null; // Skip rendering if no valid image URL
        })}
      </LoadableTinySlider>
    </Row>
  );
};

export { Top };
