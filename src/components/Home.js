import React, { Component } from 'react';
import WeatherFetcher from '../utils/WeatherFetcher'
import '../css/Home.css';
import {Button, FormGroup, FormControl} from 'react-bootstrap';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			data: '',
			loaded: true
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	handleClick() {
		WeatherFetcher.fetchWeather(this.state.value)
			.then((data) => this.setState({data: data.data, loaded: false}));
	}
	render() {
		return (
			this.state.loaded
			?
			<div className="Home">
				<div className="Instructions">
					<h1>Enter a City and State</h1>
					<div className="Input">
						<FormGroup bsSize="large">
	      					<FormControl type="text" placeholder="New York, NY" value={this.state.value} onChange={this.handleChange} />
	    				</FormGroup>
	    			</div>
					<Button bsStyle="success" bsSize="large" onClick={this.handleClick}>Get Weather</Button>
				</div>
			</div>
			:
			<div>
				<h4>The weather is:</h4>
				<p>{this.state.data.weather[0].description}</p>
			</div>
		);
	}
}

export default Home;