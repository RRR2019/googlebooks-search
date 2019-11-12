import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function SavedList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function SavedListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <h4>{props.authors}</h4>
            <p>Description: {props.description}</p>
            <a rel="noreferrer noopener" target="_blank" href={props.link}>
              Go to link!
            </a>
            <button className="btn btn-danger" id={props.id} onClick={() => props.handleDeleteButton(props.id)}>
              Delete Book
            </button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
