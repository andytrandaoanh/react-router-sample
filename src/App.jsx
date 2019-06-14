import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';

const HomeComponent = () => {
	return (
		<div><h1>Home Component</h1></div>
	)
}

const AboutComponent = () => {
	return (
		<div><h1>About Component</h1></div>
	)
}

const ContactComponent = () => {
	return (
		<div><h1>Contact Component</h1></div>
	)
}


function App () {
	return (

		<div className = "App">
			
		<Router>
			<header>
				<ul>
					<li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
					<li><NavLink to="/about" exact activeClassNaem = "active">About</NavLink></li>
					<li><NavLink to="/about/contact" activeClassName = "active">Contact</NavLink></li>
				</ul>
			</header>
			<main>
				
					<Switch>
						<Route path="/" exact component={HomeComponent} />
						<Route path="/about/contact" component={ContactComponent} />
						<Route path="/about" component={AboutComponent} />
					</Switch>
				
			</main>
		</Router>
		</div>
	)
}

export default App;


