import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome to React</h2>

        { this.props.children }
      </div>
    );
  }
}

export default App;
