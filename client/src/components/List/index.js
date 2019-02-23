import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import DeleteBtn from "../DeleteBtn";
import Button from "../Button"
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (

    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}
export function Btn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
export function ListItem({ thumbnail = "https://placehold.it/300x300",
  title,
  ingredients,
  href }) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-8 sm-6">

          </Col>
          <Col size="xs-4 sm-4">
            <Btn>
              Save
              </Btn>
              <Btn>
              View
              </Btn>
              <Btn>
              Delete
              </Btn>
          </Col>
        </Row>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Ingredients: {ingredients}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to Book Link!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
