import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

class Movies extends React.Component {
  render() {
    return (
      <div>
        <h3>Movies</h3>
        <Row sm={2} md={3} lg={4}>
          {this.props.moviesArr.map((movie, idx) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={movie.image_url}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Text>Title: {movie.title}</Card.Text>
                  <Card.Text>Overview: {movie.overview}</Card.Text>
                  <Card.Text>Released on: {movie.released_on}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default Movies;