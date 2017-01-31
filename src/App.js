import React, { Component } from 'react';
import MyNavbar from './components/MyNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar/>
        { this.props.children }
      </div>
    );
  }
}

export default App;
