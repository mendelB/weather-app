import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import '../css/Home.css';
import {Button, FormGroup, FormControl} from 'react-bootstrap';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	handleClick() {
		const path = `/forecast/${this.state.value}`
    	browserHistory.push(path)
	}
	render() {
		return (
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
		);
	}
}

export default Home;