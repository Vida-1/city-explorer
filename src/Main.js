import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './Main.css';

// import Button from 'react';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationName: '',
      lattitude: 0,
      longitude: 0,
      locationMap: '',
      errorMessage: '',
      // displayError: false
    }
  }

  handleLocation = async () => {
    try {
      const restAPIDataURL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(restAPIDataURL);

      console.log("Response from Axios: ", response.data[0].display_name);
      this.setState({
        locationName: response.data[0].display_name,
        lattitude: response.data[0].lat,
        longitude: response.data[0].lon,
        locationMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=10` // the "zoom" bit is included thanks to Zayah's code review share!
      })
    } catch (error) {
      // console.error('Error data: ', error.response.data);  --troubleshooting with TAs
      console.error('Error 2 status: ', error.response.status);
      // console.error('Error 3 headers: ', error.response.headers);   --troubleshooting with TAs

      this.setState({
        // displayError: true,
        errorMessage: `Status Code is ${error.response.status} ${error.message}`,
        locationMap: `https://httpstatusdogs.com/img/${error.response.status}.jpg`
      });
    }
  }

  updateSearchQuery = (e) => {
    this.setState({ searchQuery: e.target.value })
  }

  render() {
    // console.log("this.state in App.js: ", this.state);
    // the Form feature used below is based on a code block from W3 schools
    return (
      <>

        <Form onSubmit={this.handleLocation}>

          <p>Please enter the name of a major city.</p>
          <Form.Label>Enter city name </Form.Label>
          <Form.Control
            type="text"
            id="inputCity"
            aria-describedby="instructions"
            onChange={this.updateSearchQuery}
          />

          <Button onClick={this.handleLocation}>Explore!</Button>
        </Form>
        {this.state.locationName &&
          <>
            <p>The city we searched for is </p>
            <p>{this.state.locationName}.</p>
            <p>It is located at lattitude: {this.state.lattitude}  and longitude: {this.state.longitude}.</p>
          </>}
        {this.state.locationMap &&
          <>  <Image id="map" src={this.state.locationMap} alt="image map or error"/>
        <p id="errorMessage">{this.state.errorMessage}</p></>
        }
        
      </>

    )
  };
};

export default Main;