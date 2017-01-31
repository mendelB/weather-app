import React, { Component } from 'react';
import WeatherFetcher from '../utils/WeatherFetcher';
import '../css/Forecast.css';

class Forecast extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		}
	}
	componentDidMount() {
		WeatherFetcher.fetchDailyWeather(this.props.params.city)
			.then((data) => this.setState({dailyWeather: data.data, loaded: true}));
	}
	render() {
		return (
			this.state.loaded
			?
				<div>
					<h1>Forecast</h1>
				</div>
			:
				<div>Loading</div>	
		)
	}
}

export default Forecast;