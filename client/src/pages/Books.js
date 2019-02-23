import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import NewSearch from "../components/NewSearch";

class Books extends Component {
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        description: this.state.description,
        image: this.state.image,
        link: this.state.link
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };
  // Search Book on Goolge API////

  ////////////////////////////////
  handleBookSearch = e => {
    e.preventDefault();
    console.log(e.target.value);

    let value = e.target.value;
    this.setState({
      searchValue: value,
      [e.target.name]: e.target.value,
    });

    if (value === '') {
      this.setState({
        books: [],
        showRemoveIcon: false,
      });
    } else {
      this.setState({
        showRemoveIcon: true,
      });

      NewSearch.search(value, (books) => {
        this.setState({
          books: books
        });
        // for (let i = 0; i < 5; i++) {
        //   const bookImage = books.items[i].volumeInfo.imageLinks.smallThumbnail;
        //   const bookTitle = books.items[i].volumeInfo.title;
        //   const bookAuthor = books.items[i].volumeInfo.authors;
        //   const bookBuy = books.items[i].saleInfo.buyLink;
        //   console.log(bookTitle + bookAuthor);
        // }
      });
    }
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>(React) Google Books Search</h1>
          <h2>Search for Save Books of Interest</h2>
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
          {this.state.books.length ? (
            <List>
                  {this.state.books.map(book => {
                    return (
                      <ListItem
                        key={book.title}
                        title={book.title}
                        href={book.link}
                        ingredients={book.description}
                        thumbnail={book.image}
                      />
                    );
                  })}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Row>
      </Container>
    );
  }
}

export default Books;
