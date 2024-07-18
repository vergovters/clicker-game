import React, { useState } from 'react';
import ModalList from './ModalList/ModalList';
import styles from './PlanetBar.module.css';
import { useAppSelector } from 'src/hooks/useRedux';
import { getCurrentPlanet } from 'src/helpers/getCuttentPlanet';

const PlanetBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const lvl = useAppSelector((state) => state.user.currentLvl);

	const planetDetails = getCurrentPlanet(lvl);

	console.log(planetDetails);

	return (
		<>
			<button className={styles.planetTitle} onClick={() => setIsOpen(true)}>
				{planetDetails.title} {planetDetails.id} / 7
			</button>

			{isOpen && <ModalList isOpen={isOpen} setIsOpen={setIsOpen} />}
		</>
	);
};

export default PlanetBar;
