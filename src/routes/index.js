import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';

function AppRoutes() {
	return (
		<Router>
			<Switch>
				<Route exact path='/hola' component={HomePage} />
				<Route exact path='/' component={HomePage} />
			</Switch>
		</Router>
	);
}

export default AppRoutes;
