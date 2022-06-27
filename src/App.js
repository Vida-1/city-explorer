import React from 'react';
import './App.css';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import Weather from './Weather';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      city: "",
      locationObj: {},
      showError: false,
      errorMessage: "",
      weatherArr: []
    };
  }
  handleChange = (event) => {
    let typedCity = event.target.value;
    this.setState({ city: typedCity });
    console.log(typedCity);
  };

  getLocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`;
    console.log('URL: ', url);
    try {
      let response = await axios.get(url);
      console.log('Location response: ', response.data[0]);
      this.setState({
        locationObj: response.data[0]
      });
      // When a city search successfully returns `lot` and `lon` info, immediately create a new request (lat/lon included) to your server's `/weather` endpoint.
      this.getWeather();
    } catch (error) {
      this.setState({
        showError: true,
        errorMessage: error.response.status + ': ' + error.response.data.error
      })
    }
  }

  getWeather = async () => {
    const url = `http://localhost:3001/weather?lat=${this.state.locationObj.lat}&lon=${this.state.locationObj.lon}&searchQuery=${this.state.city}`
    try {
      let response = await axios.get(url);
      console.log('Weather response: ', response.data);
      this.setState({
        weatherArr: response.data
      });
    } catch (error) {
      this.setState({
        showError: true,
        errorMessage: error.response.status + ': ' + error.response.data.error
      })
    }
  }

  render() {
    console.log("This.state in App.js: ", this.state);
    return (
      <div className="App">
        {/* 
        <header className="App-header">
          <h1>City Explorer</h1>
        </header>} */}
        <Header />
        <Container id = 'body'>
          <Form className='form' onSubmit={this.getLocation}>
            Your City:{" "}
            <Form.Control type="text" name="yourcity" onChange={this.handleChange} />
            <Button id = 'exploreButton' type='submit'>Search </Button>
          </Form>
        </Container>

        {this.state.locationObj.display_name &&
          <Container className='container'>
            <h2>here is the map for {this.state.locationObj.display_name} </h2>
            <p>Lat/Lon: {this.state.locationObj.lat}, {this.state.locationObj.lon}</p>
            <Image className='map' roundedCircle src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=12`} alt={this.state.locationObj.display_name} />
            {/* When the server returns the array of forecast data, show the Weather component, populated with the server data. */}
            <Weather weatherArr={this.state.weatherArr} />
          </Container>
        }

        {this.state.showError &&
          <Alert variant='danger' > {this.state.errorMessage}</Alert>
        }
        <Footer />
      </div>
    );
  }
}

export default App;
