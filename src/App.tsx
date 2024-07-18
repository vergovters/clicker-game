import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import AppRouter from './AppRouter';
import Navigation from './components/Navigation/Navigation';
import TotalCoins from './components/TopBar/TotalCoins';

function App() {
	return (
		<Provider store={store}>
			<div className='wrapper'>
				<div id='stars'></div>
				<div id='stars2'></div>
				<div id='stars3'></div>
				<BrowserRouter>
					<TotalCoins />
					<AppRouter />
					<Navigation />
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
