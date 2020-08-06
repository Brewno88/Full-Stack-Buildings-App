import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { BuildProvider } from './context/GlobalContext';
import CardsGrid from './components/CardsGrid';
import Header from './components/Header';
import Buildings from './api/Buildings';
import Edit from './api/Edit';
import Create from './api/Create';

function App() {
	return (
		<BuildProvider>
			<Router>
				<Header />
				<Route path='/' exact component={CardsGrid} />
				<Route path='/buildings' exact component={Buildings} />
				<Route path='/buildings/create' component={Create} />
				<Route path='/buildings/edit/:id' component={Edit} />
			</Router>
		</BuildProvider>
	);
}

export default App;
