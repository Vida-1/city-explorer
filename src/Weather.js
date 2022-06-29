import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

class Weather extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        {this.props.weatherArr.map((dayObj, idx) => (
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