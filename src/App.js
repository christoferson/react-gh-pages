import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div>
					<nav>
						<ul id="navigation" className="menu">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</nav>
				</div>
				<Switch>
					<Route exact path="/"><Home /></Route>
					<Route path="/about"><About /></Route>
					<Route path="/contact"><Contact /></Route>
				</Switch>
			</div>
		);
	}
}

export default App;
