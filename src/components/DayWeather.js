import React, { Component } from 'react';
import {Image, Col} from 'react-bootstrap';
import { browserHistory } from 'react-router';
import '../css/DayWeather.css';

class DayWeather extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		let path = `/detail/${this.props.city}`
		browserHistory.push({
			pathname: path,
			state: {
				city: this.props.city,
				date: this.props.date,
				icon: this.props.icon,
				data: this.props.data
			}
		})
	}
	render() {
		return (
			<Col onClick={this.handleClick} xs={6} md={3} className="DayWeather">
				<Image className="img" src={process.env.PUBLIC_URL + '/weather-icons/' + this.props.icon + '.svg'}  alt="542x500" />
				<h3 className="Date">{this.props.date}</h3>
			</Col>
		)
	}
}

export default DayWeather;