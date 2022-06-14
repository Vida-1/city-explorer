// Create a new `Weather.js` component to render forecast data to the page.
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

class Weather extends React.Component {
  render() {
    return (
      // Use appropriate Bootstrap components to nicely display the forecast data.
      <Accordion defaultActivityKey="0">
        {this.props.weatherArr.map((dayObj, idx) => (
          // Note: Bootstrap uses eventKey React uses key
          <Accordion.Item eventKey={idx} key={idx}> 
            <Accordion.Header>Date: {dayObj.day}</Accordion.Header>
            <Accordion.Body>Forecast Description: {dayObj.description}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    )
  }
}

export default Weather;