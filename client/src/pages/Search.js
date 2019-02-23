import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import gAPI from "../utils/GoogleBookAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem, ListBtn } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
    showRemoveIcon: false,
    searchValue: '',
    result: {}
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.searchBook("The Notebook");
  }

  searchBook = query => {
    gAPI.search(query)
      .then(res => this.setState({
        result: res.data
      }))
      .catch(err => console.log(err));
  };

  handleBookSearch = event => {
    event.preventDefault();
    console.log("Enter Book Search..")
    this.searchBook(this.state.searchValue);
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>(React) Google Books Search</h1>
          <h2>Search Books on Interest</h2>
        </Jumbotron>
        <Row>
          <Col size="md">
            <form>
              <Input
                value={this.state.searchValue}
                onChange={this.handleInputChange}
                name="searchValue"
                placeholder="Book Name (required)"
              />
              <FormBtn
                value={this.state.searchValue}
                onClick={this.handleBookSearch}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <List>
            <Row>
              <Col size="xs-8 sm-6">
              </Col>
              <Col size="xs-4 sm-4">
                <ListBtn
                  value={this.state.searchValue}
                  onClick={this.handleBookSearch}
                >
                  Save
              </ListBtn>
                <ListBtn
                  value={this.state.searchValue}
                  onClick={this.handleBookSearch}
                >
                  View
              </ListBtn>
              </Col>
            </Row>
            {
              this.state.result.totalItems ? (
                <ListItem
                  title={this.state.result.items[0].volumeInfo.title}
                  auther={this.state.result.items[0].volumeInfo.authors}
                  description={this.state.result.items[0].volumeInfo.description}
                  thumbnail={this.state.result.items[0].volumeInfo.imageLinks.smallThumbnail}
                  href={this.state.result.items[0].volumeInfo.buyLink}
                />
              ) : (
                  <h3>No Results to Display</h3>
                )}
          </List>
        </Row>
        <Row>
          <List>
          <Row>
              <Col size="xs-8 sm-6">
              </Col>
              <Col size="xs-4 sm-4">
                <ListBtn
                  value={this.state.searchValue}
                  onClick={this.handleBookSearch}
                >
                  Save
              </ListBtn>
                <ListBtn
                  value={this.state.searchValue}
                  onClick={this.handleBookSearch}
                >
                  View
              </ListBtn>
              </Col>
            </Row>
            {
              this.state.result.totalItems ? (
                <ListItem
                  title={this.state.result.items[1].volumeInfo.title}
                  auther={this.state.result.items[1].volumeInfo.authors}
                  description={this.state.result.items[1].volumeInfo.description}
                  thumbnail={this.state.result.items[1].volumeInfo.imageLinks.smallThumbnail}
                  href={this.state.result.items[1].volumeInfo.buyLink}
                />
              ) : (
                  <h3>No Results to Display</h3>
                )}
          </List>
        </Row>
        <Row>
          <List>
          <Row>
              <Col size="xs-8 sm-6">
              </Col>
              <Col size="xs-4 sm-4">
                <ListBtn
                  value={this.state.searchValue}
                  onClick={this.handleBookSearch}
                >
                  Save
              </ListBtn>
                <ListBtn
                  value={this.state.searchValue}
                  onClick={this.handleBookSearch}
                >
                  View
              </ListBtn>
              </Col>
            </Row>
            {
              this.state.result.totalItems ? (
                <ListItem
                  title={this.state.result.items[2].volumeInfo.title}
                  auther={this.state.result.items[2].volumeInfo.authors}
                  description={this.state.result.items[2].volumeInfo.description}
                  thumbnail={this.state.result.items[2].volumeInfo.imageLinks.smallThumbnail}
                  href={this.state.result.items[2].volumeInfo.buyLink}
                />
              ) : (
                  <h3>No Results to Display</h3>
                )}
          </List>
        </Row>
      </Container>
    );
  }
}

export default Search;
