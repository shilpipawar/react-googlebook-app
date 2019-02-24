import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem, ListBtn } from "../components/List";

class Save extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
    showRemoveIcon: false,
    searchValue: '',
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", image: "", link: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  viewBook = link => {
    if (link) {
      // window.location.href = link.infoLink;
      window.open(
        link,
        '_blank'
      )
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>(React) Google Books Search</h1>
          <h2>Search for Save Books of Interest</h2>
        </Jumbotron>
        <Row>
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => {
                return (
                  <ListItem
                    key={book._id}
                    title={book.title}
                    author={book.author}
                    href={book.link}
                    description={book.description}
                    thumbnail={book.image}
                  >
                    <Col size="xs-8 sm-6">
                    </Col>
                    <Col size="xs-4 sm-4">
                      <ListBtn
                        onClick={() => this.viewBook(book.link)}
                      >
                        View
              </ListBtn>
                      <ListBtn
                        onClick={() => this.deleteBook(book._id)}
                      >
                        Delete
              </ListBtn>
                    </Col>
                  </ListItem>
                );
              })
              }
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Row>
      </Container>
    );
  }
}

export default Save;
