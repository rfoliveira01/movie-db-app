import React, { Component } from 'react';
import movies from './data/movies.json';
import { Row, Col, Container, Carousel } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        let topMovies = [...movies].sort((a, b) => b['rate'] - a['rate']).splice(0, 5);
        return (
            <Container>
                <Row>
                    <Col><h2>Welcome to RMovieDB</h2></Col>
                </Row>
                <Row>
                    <Col><center>Top movies:</center></Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Carousel>
                            {topMovies.map(movie => (
                                <Carousel.Item key={movie.key}>
                                    <a href={`movie/${movie.id}`}><img
                                        className="d-block w-100"
                                        src={`${process.env.PUBLIC_URL}/movie-covers/${movie.img}`}
                                        alt={movie.key}
                                    /></a>
                                    <Carousel.Caption>
                                        <h3>{movie.name}</h3>
                                        Rate: {movie.rate}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        );
    }
}