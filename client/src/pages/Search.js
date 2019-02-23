import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import gAPI from "../utils/GoogleBookAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import NewSearch from "../components/NewSearch";

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
            {
              this.state.result.totalItems ? (
                <ListItem
                  title={this.state.result.items[0].volumeInfo.title}
                  auther={this.state.result.items[0].volumeInfo.authors}
                  description = {this.state.result.items[0].volumeInfo.description}
                  thumbnail = {this.state.result.items[0].volumeInfo.imageLinks.smallThumbnail}
                  href = {this.state.result.items[0].volumeInfo.buyLink}
                />
              ) : (
                  <h3>No Results to Display</h3>
                )}

          </List>
          {/* New Code */}
          
        </Row>
      </Container>
    );
  }
}

export default Search;
