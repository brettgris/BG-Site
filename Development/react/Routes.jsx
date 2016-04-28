import React from 'react';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import appHistory from './services/appHistory';

import BasePage from './pages/BasePage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

const Routes = () => {
	return(
		<Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
			<Route path="/" component={BasePage} >
				<IndexRoute component={HomePage} />
				<Route path="/project/:project" component={ProjectPage} />
			</Route>
		</Router>
	)
};

export default Routes;
