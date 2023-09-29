import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Layout} from "../components/Layout";
import {AnimeCard} from "../components/AnimeCard";
import axios from "axios";
import {Search} from "../components/Search";

/**
 * Results component displays a list of anime based on search results.
 *
 * @param {Object} location - The location object containing state and search parameters.
 */
const Results = ({ location }) => {
  const [fetchedData, setFetchedData] = useState(null);
  const { state } = location;
  let param;
  if (typeof window !== "undefined") {
    param =
      state?.param ?? new URLSearchParams(window.location.search).get("term");
  }

  /**
   * Check the search parameter and fetch data accordingly.
   *
   * @param {string} param - The search parameter.
   */
  const checkParamFetchData = (param) => {
    let newUrl = `/results`;
    if (param === null || param === "") {
      param = undefined;
      setFetchedData(null);
    }
    if (param !== undefined) {
      fetchData();
      newUrl = `/results?term=${param}`;
    }
    window.history.replaceState(null, null, newUrl);
  };

  /**
   * Callback function for the search form submission.
   *
   * @param {Object} data - The search form data.
   */
  const onSubmit = (data) => {
    param = data.searchTerm;
    checkParamFetchData(param);
  };

  /**
   * Function to fetch anime data based on the search term.
   */
  const fetchData = () => {
    return axios
      .get(`https://api.jikan.moe/v4/anime?q=${param}`)
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

  // Fetch data when the component mounts or when the "param" prop changes
  useEffect(() => {
    checkParamFetchData(param);
  }, []);

  return (
    <Layout>
      <Container>
        <Search searchFunction={onSubmit} />
        <Row>
          {fetchedData && fetchedData.length > 0 ? (
            fetchedData.map((file, index) => {
              const {
                title,
                images: {
                  jpg: { large_image_url },
                },
                mal_id,
              } = file;
              return (
                <Col lg={4} key={index} className={"mb-5"}>
                  <AnimeCard
                    title={title}
                    img={large_image_url}
                    mal_id={mal_id}
                  />
                </Col>
              );
            })
          ) : (
            <Col className={"text-center"}>
              <h3 className={"text-white"}>No results found</h3>
            </Col>
          )}
        </Row>
      </Container>
    </Layout>
  );
};

export default Results;
