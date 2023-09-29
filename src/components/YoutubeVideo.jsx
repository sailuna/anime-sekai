import React from "react";
import YouTube from "react-youtube";
import {Row} from "react-bootstrap";

/**
 * YoutubeVideo component displays a YouTube video.
 *
 * @param {string} id - The YouTube video ID.
 */
const YoutubeVideo = ({ id }) => {
  const opts = {
    width: "100%",
    height: "800",
  };

  return (
    <Row className="my-5">
      <YouTube videoId={id} opts={opts} />
    </Row>
  );
};

export { YoutubeVideo };
