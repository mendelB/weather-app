import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import '../css/Detail.css';

class Detail extends Component {
	convert(temp) {
		return Math.round((temp - 273.15) * 9/5 + 32)
	}
	render() {
		return (
			<div className="Detail">
				<Image className="img" src={process.env.PUBLIC_URL + '/weather-icons/' + this.props.location.state.icon + '.svg'}  alt="542x500" />
				<h3 className="Date">{this.props.location.state.date}</h3>
				<h2>{this.props.location.state.city}</h2>
				<h3> {this.props.location.state.data.weather[0].description} </h3>
				<h2>min temp: {this.convert(this.props.location.state.data.temp.min)}</h2>
				<h2>max temp: {this.convert(this.props.location.state.data.temp.max)}</h2>
				<h2>humidity: {this.props.location.state.data.humidity}</h2>
			</div>
		)
	}
}

export default Detail;