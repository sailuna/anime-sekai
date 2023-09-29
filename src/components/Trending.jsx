import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import LoadableTinySlider, {settings} from "./LoadableTinySlider";

/**
 * Trending component displays a list of trending anime for the current season.
 *
 * @param {Array} trending - An array of trending anime objects.
 */
const Trending = ({ trending }) => {
  return (
    <Row className="my-5">
      <Col>
        <h1 className="text-white text-center">Trending Now This Season</h1>
      </Col>
      <LoadableTinySlider settings={settings}>
        {trending.map((anime, index) => {
          const {
            images: {
              jpg: { large_image_url },
            },
            mal_id,
          } = anime;

          // Check if a valid image URL is available
          if (large_image_url) {
            return (
              <div key={index} style={{ position: "relative" }}>
                <a
                  href={`/anime/?${mal_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    src={large_image_url}
                    className="shadowedNBorder"
                    alt={`Trending Anime ${index + 1}`}
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

export { Trending };
