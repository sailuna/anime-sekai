import React from "react";
import {graphql, navigate} from "gatsby";
import {Container} from "react-bootstrap";
import {Layout} from "../components/Layout";
import {Trending} from "../components/Trending";
import {Top} from "../components/Top";
import {Search} from "../components/Search";

/**
 * Index component is the homepage displaying trending and top anime.
 *
 * @param {Object} data - Data retrieved from GraphQL query.
 */
const Index = ({ data }) => {
  const { allJikanApiTop, allJikanApiSeasonsNow } = data;

  /**
   * Callback function for the search form submission.
   *
   * @param {Object} data - The search form data.
   */
  const onSubmit = (data) => {
    navigate(`/results`, {
      state: { param: data.searchTerm },
    });
  };

  return (
    <Layout>
      <Container className="my-5">
        <Trending trending={allJikanApiSeasonsNow.nodes[0].data} />
        <Search searchFunction={onSubmit} />
        <Top top={allJikanApiTop.nodes[0].data} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query getAnime {
    allJikanApiSeasonsNow(
      filter: { data: { elemMatch: { airing: { eq: true } } } }
    ) {
      nodes {
        data {
          title
          mal_id
          images {
            jpg {
              large_image_url
            }
          }
        }
      }
    }
    allJikanApiTop {
      nodes {
        data {
          mal_id
          title
          images {
            jpg {
              large_image_url
            }
          }
        }
      }
    }
  }
`;

export default Index;
