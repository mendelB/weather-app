import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import '../css/Detail.css';

class Detail extends Component {
	render() {
		return (
			<div className="Detail">
				<Image className="img" src={process.env.PUBLIC_URL + '/weather-icons/' + this.props.location.state.icon + '.svg'}  alt="542x500" />
				<h3 className="Date">{this.props.location.state.date}</h3>
				<h2>{this.props.location.state.city}</h2>
				<h3> {this.props.location.state.data.weather[0].description} </h3>
				<h2>humidity: {this.props.location.state.data.humidity}</h2>
			</div>
		)
	}
}

export default Detail;