import React, { useEffect, useState } from 'react';
import styles from './MainScreen.module.css';
import ProgressBar from './ProgressBar/ProgressBar';
import ClickButton from './ClickButton/ClickButton';
import PlanetBar from './PlanetBar/PlanetBar';
import LevelUp from './LevelUp/LevelUp';

const MainScreen = () => {
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
		<div className={styles.container}>
			<PlanetBar />
			<ProgressBar />
			{user && (
				<div className='user-info'>
					<p>Username: {user.username}</p>
					<p>
						Name: {user.first_name} {user.last_name}
					</p>
				</div>
			)}
			<ClickButton />
			<LevelUp />
		</div>
	);
};

export default MainScreen;
