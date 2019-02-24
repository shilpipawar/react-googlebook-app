import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import gAPI from "../utils/GoogleBookAPI";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem, ListBtn } from "../components/List";
import { Input, FormBtn } from "../components/Form";

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

  viewBook = link => {
    if (link.infoLink) {
      // window.location.href = link.infoLink;
      window.open(
        link.infoLink,
        '_blank'
      )
    }
  };

  saveBook = data => {
    console.log(data);
    if (data.title) {
      API.saveBook({
        title: data.title,
        author: data.authors[0],
        description: data.description,
        image: data.imageLinks.thumbnail,
        link: data.previewLink
      })
        .then(res => console.log(res.status))
        .catch(err => console.log(err));
    }
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
            {
              this.state.result.totalItems ? (
                <ListItem
                  title={this.state.result.items[0].volumeInfo.title}
                  author={this.state.result.items[0].volumeInfo.authors}
                  description={this.state.result.items[0].volumeInfo.description}
                  thumbnail={this.state.result.items[0].volumeInfo.imageLinks.smallThumbnail}
                  href={this.state.result.items[0].volumeInfo.previewLink}
                >
                  <Col size="xs-8 sm-6">
                  </Col>
                  <Col size="xs-4 sm-4">
                    <ListBtn
                      onClick={() => this.saveBook(this.state.result.items[0].volumeInfo)}
                    >
                      Save
              </ListBtn>
                    <ListBtn
                      onClick={() => this.viewBook(this.state.result.items[0].volumeInfo)}
                    >
                      View
              </ListBtn>
                  </Col>
                </ListItem>
              ) : (
                  <h3>No Results to Display</h3>
                )}
          </List>
        </Row>
        <Row>
          <List>
            {
              this.state.result.totalItems ? (
                <ListItem
                  title={this.state.result.items[1].volumeInfo.title}
                  auther={this.state.result.items[1].volumeInfo.authors}
                  description={this.state.result.items[1].volumeInfo.description}
                  thumbnail={this.state.result.items[1].volumeInfo.imageLinks.smallThumbnail}
                  href={this.state.result.items[1].volumeInfo.previewLink}
                >
                <Col size="xs-8 sm-6">
                  </Col>
                  <Col size="xs-4 sm-4">
                    <ListBtn
                      onClick={() => this.saveBook(this.state.result.items[1].volumeInfo)}
                    >
                      Save
              </ListBtn>
                    <ListBtn
                      onClick={() => this.viewBook(this.state.result.items[1].volumeInfo)}
                    >
                      View
              </ListBtn>
                  </Col>
                </ListItem>
              ) : (
                  <h3>No Results to Display</h3>
                )}
          </List>
        </Row>
        <Row>
          <List>
            {
              this.state.result.totalItems ? (
                <ListItem
                  title={this.state.result.items[2].volumeInfo.title}
                  auther={this.state.result.items[2].volumeInfo.authors}
                  description={this.state.result.items[2].volumeInfo.description}
                  thumbnail={this.state.result.items[2].volumeInfo.imageLinks.smallThumbnail}
                  href={this.state.result.items[2].volumeInfo.previewLink}
                ><Col size="xs-8 sm-6">
                </Col>
                <Col size="xs-4 sm-4">
                  <ListBtn
                    onClick={() => this.saveBook(this.state.result.items[2].volumeInfo)}
                  >
                    Save
            </ListBtn>
                  <ListBtn
                    onClick={() => this.viewBook(this.state.result.items[2].volumeInfo)}
                  >
                    View
            </ListBtn>
                </Col>
              </ListItem>
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
