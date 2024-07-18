import React from 'react';
import styles from './ProgressBar.module.css';
import { useAppSelector } from 'src/hooks/useRedux';
import { getCurrentPlanet } from 'src/helpers/getCuttentPlanet';

const ProgressBar = () => {
	const planet = useAppSelector((state) => state.user.currentLvl);
	const planetDetails = getCurrentPlanet(planet);
	const maxProgress = planetDetails.price;

	const coins = useAppSelector((state) => state.coins.count);

	const progressPercentage = maxProgress > 0 ? (coins / maxProgress) * 100 : 0;

	return (
		<>
			<div className={styles.progressBar}>
				<div
					className={styles.progress}
					style={{ width: `${progressPercentage}%` }}
				></div>
				<div className={styles.progressTextContainer}>
					<p className={styles.progressText}>
						{coins} / {maxProgress}
					</p>
				</div>
			</div>
		</>
	);
};

export default ProgressBar;
