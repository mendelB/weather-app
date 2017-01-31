import React, { Component } from 'react';
import moment from 'moment'
import WeatherFetcher from '../utils/WeatherFetcher';
import {Grid, Row} from 'react-bootstrap';
import DayWeather from './DayWeather';
import '../css/Forecast.css';

class Forecast extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		}
		this.clickHandle = this.clickHandle.bind(this)
	}
	componentDidMount() {
		WeatherFetcher.fetchFiveDayWeather(this.props.params.city)
			.then((data) => this.setState({fiveDayWeather: data.data, loaded: true}));
	}
	clickHandle() {
		debugger
	}
	render() {
		let weathers = this.state.loaded && this.state.fiveDayWeather.list.map((w, i) => 
			<DayWeather 
				date={moment().add(i, 'day').format('LL')} 
				icon={w.weather[0].icon.toLowerCase()}
				key={i} />
		)
		weathers.length
		return (
			this.state.loaded
			?
				<div className="Forecast">
					<h1>{this.state.fiveDayWeather.city.name}</h1>
					<h2>Select a Day</h2>
					<Grid>
					    <Row>
							{weathers[0]}
							{weathers[1]}
							{weathers[2]}
							{weathers[3]} 
					    </Row>
					</Grid>
					<Grid>
						<Row>
							{weathers[4]}
						</Row>
					</Grid>
					<button onClick={this.clickHandle}>Click</button>
				</div>
			:
				<div className="Forecast"><h1>Loading</h1></div>	
		)
	}
}

export default Forecast;