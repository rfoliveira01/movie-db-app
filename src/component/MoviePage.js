import React from 'react';
import movies from './data/movies.json';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

function MoviePage () {    
    let { id } = useParams();
    let movie =  {};
    if (id) {
        movie = [...movies].filter((a) => a.id == id )[0];
    }
    return (
        <Container>
            <h2>{movie.name}</h2>
            <Row>
                <Col md={{ span: 3 }} sm={{ span: 12 }}>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/movie-covers/${movie.img}`}
                        alt="First slide"
                    />
                </Col>
                <Col l md={{ span: 9 }} sm={{ span: 12 }}>
                    <Row>
                        <Col>
                            <label>Title: </label> {movie.name}
                        </Col> 
                    </Row>
                    <Row>
                        <Col>
                            <label>Description: </label> {movie.description}
                        </Col> 
                    </Row>
                    <Row>
                        <Col>
                            <label>Genres: </label> {movie.genres.join(", ")}
                        </Col> 
                    </Row>
                    <Row>
                        <Col>
                            <label>Rate: </label> {movie.rate}
                        </Col> 
                    </Row>
                </Col>
            </Row>
        </Container>
    );
    
}

export default MoviePage;
