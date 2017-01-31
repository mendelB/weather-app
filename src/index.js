import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import Home from './components/Home';
import Forecast from './components/Forecast';
import Detail from './components/Detail';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render((
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={Home}/>
  		<Route path="/forecast/:city" component={Forecast}/>
  		<Route path="/detail/:city" component={Detail}/>
  	</Route>
  </Router>
), document.getElementById('root'));
