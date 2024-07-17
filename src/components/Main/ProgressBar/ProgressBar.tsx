import React from 'react';
import styles from './ProgressBar.module.css';
import { useAppSelector } from 'src/hooks/useRedux';

const ProgressBar = () => {
	const maxProgress = 100;

	const coins = useAppSelector((state) => state.coins.count);

	return (
		<>
			<div className={styles.progressBar}>
				<div className={styles.progress} style={{ width: `${coins}%` }}></div>
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
