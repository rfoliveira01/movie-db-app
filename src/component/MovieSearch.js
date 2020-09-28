import React, { Component } from 'react';
import movies from './data/movies.json';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterName, filterGenre } from '../actions';
import { Link } from 'react-router-dom';
import {
    useHistory
} from "react-router-dom";

export class MovieSearch extends Component {
    state = {
        nameFilter: '',
        genreFilter: '',
        movies: movies
    }
    genres = [
        "Action", "Adventure", "Comedy", "Crime", "Biography", "Drama", "History", "Sport", "Mystery", "Thriller", "Scifi"
    ];

    inputNameChange = event => {
        this.setState({
            nameFilter: event.target.value
        })
    }

    inputGenreChange = event => {
        this.setState({
            genreFilter: event.target.value
        })
    }

    dynammicSearch = () => {
        let filteredValue = this.state.movies.filter(movie => movie.name.toLocaleLowerCase().includes(this.state.nameFilter.toLocaleLowerCase()));
        console.log(this.state.genreFilter)
        if(this.state.genreFilter){
            filteredValue = filteredValue.filter(movie => movie.genres.includes(this.state.genreFilter.toLocaleLowerCase()));
        }
        return filteredValue;
    }

    render() {
        const { filterName, filterGenre, newValue } = this.props;

        const { nameFilter, genreFilter, movies } = this.state;
        return (
            <Container>
                <Row>
                    <Col><h2>Search for your favourite movie</h2></Col>
                </Row>
                <Row>
                    <Col md={{span : 3}}>
                        <label>Movie Title:
                            <input
                                type="text"
                                onChange={this.inputNameChange}
                                value={nameFilter}
                                className="form-control"
                            />
                        </label>
                    </Col>
                    <Col md={{span : 3}}>
                        <label>Movie Genre:
                            <select
                                onChange={this.inputGenreChange}
                                value={genreFilter}
                                className="form-control">
                                <option value=""></option>
                                {this.genres.map(genre => (
                                    <option value={genre} key={genre}>{genre}</option>
                                ))}
                            </select>
                        </label>
                    </Col>
                </Row>

                <Row>
                    {this.dynammicSearch().map(movie => (
                        <Col lg={{ span: 3 }} md={{ span: 4 }} sm={{ span: 6 }} key={movie.key}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" className="d-block w-100" src={`${process.env.PUBLIC_URL}/movie-covers/${movie.img}`}
                                    alt={movie.key} />
                                <Card.Body>
                                    <Card.Title>{movie.name}</Card.Title>
                                    <Card.Text>
                                        Rate: {movie.rate}
                                    </Card.Text>
                                    <Link className="btn btn-primary" to={`movie/${movie.id}`}>More details</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                    )}
                </Row>
            </Container>
        );
    }
}
const mapStateToProps = store => ({
    newValueName: store.filterNameState.newValue,
    newValueGenre: store.filterGenreState.newValue
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ filterName, filterGenre }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);