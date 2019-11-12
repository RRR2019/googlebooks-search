import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import { SavedList, SavedListItem } from "../components/SavedList";
import { Container, Row, Col } from "../components/Grid";

class SaveBook extends Component {
    state = {
        savedBooks: []
    };

//when this component mounts, grab all books that were save to the database 
componentDidMount() {
    API.getBooks()
        .then(res => this.setState({ savedBooks: res.data }))
        .catch(err => console.log(err))
}

//function to remove book by id
handleDeleteButton = id => {
    API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
}

render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
 
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
          <Col size="xs-12">
              {!this.state.savedBooks.length ? (
                <h1 className="text-center">No Saved Books</h1>
              ) : (
                <SavedList>
                  {this.state.savedBooks.map(book => {
                    return (
                      <SavedListItem
                        key={book.id}
                        title={book.title}
                        link={book.link}
                        description={book.description}
                        image={book.image}
                        authors={book.authors}
                        savedBooks={this.state.savedBooks}
                        handleDeleteButton={this.handleDeleteButton}
                      />
                    );
                  })}
                </SavedList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SaveBook;

