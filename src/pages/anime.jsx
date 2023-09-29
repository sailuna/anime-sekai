import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {Layout} from "../components/Layout";
import axios from "axios";
import {AnimeIntro} from "../components/AnimeIntro";
import {Synopsis} from "../components/Synopsis";
import {YoutubeVideo} from "../components/YoutubeVideo";
import {StreamingServices} from "../components/StreamingServices";
import {Reviews} from "../components/Reviews";

/**
 * AnimePage component displays details of an anime including intro, synopsis, video, streaming services, and reviews.
 *
 * @param {object} location - The location object containing search query parameters.
 */
const AnimePage = ({ location }) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchedReviews, setFetchedReviews] = useState(null);
  const { search } = location;

  let param = search.replace(/\?/g, "");

  /**
   * Check the search parameter and fetch data accordingly.
   *
   * @param {string} param - The search parameter.
   */
  const checkParamFetchData = (param) => {
    if (param === null || param === "") {
      param = undefined;
      setFetchedData(null);
    }
    if (param !== undefined) {
      fetchData();
      fetchReviews();
    }
  };

  /**
   * Function to fetch anime data.
   */
  const fetchData = () => {
    return axios
      .get(`https://api.jikan.moe/v4/anime/${param}/full`)
      .then((response) => {
        if (response.status !== 200) {
          return Promise.reject(new Error(`Response failed`));
        }
        const data = response.data.data;
        setFetchedData(data);
        return data;
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  };

  /**
   * Function to fetch reviews for the anime.
   */
  const fetchReviews = () => {
    return axios
      .get(`https://api.jikan.moe/v4/reviews/anime`)
      .then((response) => {
        if (response.status !== 200) {
          return Promise.reject(new Error(`Response failed`));
        }

        const data = response.data.data.filter((item) => {
          return item.entry.mal_id === parseInt(param);
        });

        setFetchedReviews(data);
        return data;
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  };

  // Fetch data when the component mounts or when the "param" prop changes
  useEffect(() => {
    checkParamFetchData(param);
  }, []);

  return (
    <Layout>
      {fetchedData && (
        <Container>
          <AnimeIntro fetchedData={fetchedData} />
          {fetchedData.synopsis && <Synopsis synopsis={fetchedData.synopsis} />}
          {fetchedData.trailer.youtube_id && (
            <YoutubeVideo id={fetchedData.trailer.youtube_id} />
          )}
          {fetchedData.streaming.length > 0 && (
            <StreamingServices stream={fetchedData.streaming} />
          )}
          {fetchedReviews?.length > 0 && <Reviews reviews={fetchedReviews} />}
        </Container>
      )}
    </Layout>
  );
};

export default AnimePage;
