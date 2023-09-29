import React from "react";
import PropTypes from "prop-types";
import {Col, Image, Row} from "react-bootstrap";

/**
 * AnimeIntro component displays information about an anime.
 *
 * @param {object} fetchedData - Anime data fetched from an API.
 */
const AnimeIntro = ({ fetchedData }) => {
  const {
    images: {
      jpg: { large_image_url },
    },
    title,
    title_japanese,
    type,
    status,
    year,
    episodes,
    duration,
    rating,
    score,
    broadcast,
    genres,
    studios,
  } = fetchedData;

  return (
    <Row>
      <Col lg={5} className="mb-5 mb-lg-0">
        <Image src={large_image_url} className="w-100 shadowedNBorder" />
      </Col>
      <Col className="text-white">
        <h3>{title}</h3>
        <h3>{title_japanese}</h3>
        <Row>
          <Col className="d-inline-flex">
            <p className="pe-3">{type}</p>
            <p>{status}</p>
          </Col>
        </Row>
        {year && <p>{year}</p>}
        {episodes && <p>Episodes: {episodes}</p>}
        {duration && <p>Duration: {duration}</p>}
        {rating && <p>{rating}</p>}
        {score && <p>⭐ {score}</p>}
        {broadcast.string && <p>Broadcasting: {broadcast.string}</p>}
        {genres.length > 0 && (
          <Row>
            <Col className="d-inline-flex">
              Genres:&nbsp;
              {genres.map((genre, index) => {
                const { name } = genre;
                return (
                  <p className="pe-3" key={index}>
                    {name}
                  </p>
                );
              })}
            </Col>
          </Row>
        )}
        {studios.length > 0 && (
          <Row>
            <Col className="d-inline-flex">
              Studio:&nbsp;
              {studios.map((studio, index) => {
                const { name } = studio;
                return (
                  <p className="pe-3" key={index}>
                    {name}
                  </p>
                );
              })}
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

// PropTypes for documenting the expected prop types
AnimeIntro.propTypes = {
  fetchedData: PropTypes.shape({
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        large_image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    title_japanese: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    year: PropTypes.string,
    episodes: PropTypes.string,
    duration: PropTypes.string,
    rating: PropTypes.string,
    score: PropTypes.string,
    broadcast: PropTypes.shape({
      string: PropTypes.string,
    }).isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    studios: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export { AnimeIntro };
