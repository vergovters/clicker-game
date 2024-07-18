import React from 'react';
import { useAppSelector } from 'src/hooks/useRedux';
import coin from '../../assets/coin.png';
import styles from './TotalCoins.module.css';

const TopBar = () => {
	const coins = useAppSelector((state) => state.coins.count);

	return (
		<div className={styles.topBar}>
			<div className={styles.totalCoins}>
				{coins} <img src={coin} alt='coin' />
			</div>
		</div>
	);
};

export default TopBar;
