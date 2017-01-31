import React, { Component } from 'react';
import {Image, Col, Thumbnail, Button} from 'react-bootstrap';
import '../css/DayWeather.css';

class DayWeather extends Component {
	render() {
		return (
			<Col xs={6} md={3} className="DayWeather">
				<Image className="img" src={process.env.PUBLIC_URL + '/weather-icons/' + this.props.icon + '.svg'}  alt="542x500" />
				<h3 className="Date">{this.props.date}</h3>
			</Col>
		)
	}
}

export default DayWeather;