import React, { useEffect, useState } from 'react';
import { getCurrentPlanet } from 'src/helpers/getCuttentPlanet';
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux';
import { decrement } from 'src/store/coins/actions';
import { incrementLvl } from 'src/store/user/actions';
import styles from './LevelUp.module.css';

const LevelUp = () => {
	const [lvlUp, setLvlUp] = useState(false);
	const coins = useAppSelector((state) => state.coins.count);
	const lvl = useAppSelector((state) => state.user.currentLvl);
	const dispatch = useAppDispatch();

	const planetDetails = getCurrentPlanet(lvl);

	useEffect(() => {
		if (coins >= planetDetails.price && lvl < 7) {
			setLvlUp(true);
		} else {
			setLvlUp(false);
		}
	}, [coins, planetDetails.price]);

	const handleClick = () => {
		dispatch(decrement(planetDetails.price));
		dispatch(incrementLvl());
		setLvlUp(false);
	};

	return (
		<div>
			{lvlUp ? (
				<p onClick={handleClick} className={styles.lvlUp}>
					Level up!
				</p>
			) : (
				<p className={styles.lvlUpTrans}>Level up!</p>
			)}
		</div>
	);
};

export default LevelUp;
