import React, { Component } from 'react';
import './App.scss';
import Home from './component/Home';
import MoviePage from './component/MoviePage';
import popcornImg from './content/images/popcorn.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import { Container, Navbar, Nav } from 'react-bootstrap';
import MovieSearch from './component/MovieSearch';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">
              <img
                alt=""
                src={popcornImg}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}RMovieDB</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movie Search</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path="/movie/:id" children={<MoviePage />} />
            <Route path="/movies">
              <MovieSearch />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

function Movies() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
