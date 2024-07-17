import React, { useEffect, useState } from 'react';
import './App.css';
import MainScreen from './components/Main/MainScreen';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (window.Telegram && window.Telegram.WebApp) {
			const tg = window.Telegram.WebApp;
			const userData = tg.initDataUnsafe.user || null;
			setUser(userData);
			tg.ready();
		}
	}, []);

	return (
		<Provider store={store}>
			<div className='wrapper'>
				<div id='stars'></div>
				<div id='stars2'></div>
				<div id='stars3'></div>
				<MainScreen />
				{user && (
					<div className='user-info'>
						<p>Username: {user.username}</p>
						<p>
							Name: {user.first_name} {user.last_name}
						</p>
					</div>
				)}
			</div>
		</Provider>
	);
}

export default App;
