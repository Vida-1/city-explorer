import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

// Create a new `Weather.js` component to render forecast data to the page.

class Weather extends React.Component {
  render() {
    return (
      <>
        <Accordion defaultActivityKey="0">
          {this.props.weatherArr.map((dayObj, idx) => (
            <Accordion.Item eventKey={idx} key={idx}>
              <Accordion.Header>Date: {dayObj.day}</Accordion.Header>
              <Accordion.Body>Forecast Description: {dayObj.description}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </>
    )
  }
}

export default Weather;