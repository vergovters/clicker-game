import React from 'react';
import './App.css';
import MainScreen from './components/Main/MainScreen';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<div className='wrapper'>
				<div id='stars'></div>
				<div id='stars2'></div>
				<div id='stars3'></div>
				<MainScreen />
			</div>
		</Provider>
	);
}

export default App;
