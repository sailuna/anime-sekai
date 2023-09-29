import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";

/**
 * Search component provides a search form for finding anime.
 *
 * @param {Function} searchFunction - Callback function to handle the search.
 */
const Search = ({ searchFunction }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Row className="my-5 py-5">
      <Col xs={12}>
        <h2 className="text-white text-center py-2">
          Find the anime you are interested in
        </h2>
      </Col>
      <Col xs={12}>
        <Form className="d-flex" onSubmit={handleSubmit(searchFunction)}>
          <Form.Control
            type="search"
            name="search"
            placeholder="Search favorite anime"
            className="me-2"
            aria-label="Search"
            {...register("searchTerm")}
          />
          <Button variant="outline-secondary" type="submit">
            Search
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export { Search };
