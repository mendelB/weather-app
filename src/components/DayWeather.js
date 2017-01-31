import React, { Component } from 'react';
import '../css/DayWeather.css';

class DayWeather extends Component {
	render() {
		return (
			<div className="DayWeather">
				<img className={this.props.icon} alt="weather icon"/>
				<p>{this.props.date}</p>
			</div>
		)
	}
}

export default DayWeather;