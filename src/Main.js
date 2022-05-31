import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

// import Button from 'react';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationName: '',
      lattitude: 0,
      longitude: 0
    }
  }

  handleLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(url);
    console.log("Response from Axios: ", response.data[0].display_name);
    this.setState({
      locationName: response.data[0].display_name,
      lattitude: response.data[0].lat,
      longitude: response.data[0].lon
    });
  }

  updateSearchQuery = (e) => {
    this.setState({ searchQuery: e.target.value })
  }

  render() {
    // console.log("this.state in App.js: ", this.state);
    // the Form feature used below is based on a code block from W3 schools
    return (
      <>
        <h1>City Explorer App</h1>

        <Form onSubmit={this.handleLocation}>
          <Form.Label>Enter city name</Form.Label>
          <Form.Control
            type="text"
            id="inputCity"
            aria-describedby="instructions"
            onChange={this.updateSearchQuery}
          />

          <Form.Text id="instructions" muted>Please enter the name of a major city.</Form.Text>

          <Button onClick={this.handleLocation}>Explore!</Button>
        </Form>
        {this.state.locationName &&
          <h2>The city we searched for is {this.state.locationName}. It is located at lattitude: {this.state.lattitude}  and longitude: {this.state.longitude}.</h2>}
      </>
    )
  };
};

export default Main;