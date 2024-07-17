import React from 'react';
import styles from './MainScreen.module.css';
import ProgressBar from './ProgressBar/ProgressBar';
import ClickButton from './ClickButton/ClickButton';
import TotalCoins from './TopBar/TotalCoins';
import { useAppSelector } from 'src/hooks/useRedux';

const MainScreen = () => {
	const coins = useAppSelector((state) => state.coins.count);
	return (
		<div className={styles.container}>
			<TotalCoins />
			<ProgressBar />
			<ClickButton />
		</div>
	);
};

export default MainScreen;
