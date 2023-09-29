import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

/**
 * AnimeCard component displays an anime card with an image and title.
 *
 * @param {string} img - URL of the anime's image.
 * @param {string} title - Title of the anime.
 * @param {string} mal_id - MyAnimeList (MAL) ID of the anime.
 */
const AnimeCard = ({ img = "", title = "", mal_id = "" }) => {
  return (
    <a href={`/anime/?${mal_id}`} style={{ textDecoration: "none" }}>
      <Card style={{ height: "450px" }} className="bg-white">
        <Card.Img
          variant="top"
          src={img}
          alt={title}
          style={{ height: "350px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title> {title}</Card.Title>
        </Card.Body>
      </Card>
    </a>
  );
};

// PropTypes for documenting the expected prop types
AnimeCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  mal_id: PropTypes.string,
};

export { AnimeCard };
