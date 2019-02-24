import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (

    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}
export function ListBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
export function ListItem({ thumbnail = "https://placehold.it/300x300",
  title,
  auther,
  description,
  href,
children }) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
        {children}
        </Row>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h3>Auther:{auther}</h3>
            <p>description: {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to Book Link!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
