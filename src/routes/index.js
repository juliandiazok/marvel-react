import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage/HomePage';
import Favorites from '../views/Favorites/Favorites';

function AppRoutes() {
	return (
		<Router>
			<Switch>
				<Route exact path='/favorites' component={Favorites} />
				<Route exact path='/' component={HomePage} />
			</Switch>
		</Router>
	);
}

export default AppRoutes;
