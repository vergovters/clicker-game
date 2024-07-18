import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux';
import { INCREMENT } from 'src/store/coins/types';
import styles from './ClickButton.module.css'; // Import your CSS module
import { getCurrentPlanet } from 'src/helpers/getCuttentPlanet';
import planet1 from 'src/assets/planets/planet1.png';
import planet2 from 'src/assets/planets/planet2.png';
import planet3 from 'src/assets/planets/planet3.png';
import planet4 from 'src/assets/planets/planet4.png';
import planet5 from 'src/assets/planets/planet5.png';
import planet6 from 'src/assets/planets/planet6.png';
import planet7 from 'src/assets/planets/planet7.png';

const ClickButton = () => {
	const coins = useAppSelector((state) => state.coins.count);
	const dispatch = useAppDispatch();
	const lvl = useAppSelector((state) => state.user.currentLvl);
	const planetDetails = getCurrentPlanet(lvl);
	const maxProgress = planetDetails.price;
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const background = buttonRef.current;
		if (lvl === 1) {
			background.style.backgroundImage = `url(${planet1})`;
		} else if (lvl === 2) {
			background.style.backgroundImage = `url(${planet2})`;
		} else if (lvl === 3) {
			background.style.backgroundImage = `url(${planet3})`;
		} else if (lvl === 4) {
			background.style.backgroundImage = `url(${planet4})`;
		} else if (lvl === 5) {
			background.style.backgroundImage = `url(${planet5})`;
		} else if (lvl === 6) {
			background.style.backgroundImage = `url(${planet6})`;
		} else if (lvl === 7) {
			background.style.backgroundImage = `url(${planet7})`;
		}
	}, [lvl]);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (coins < maxProgress) {
			dispatch({ type: INCREMENT });

			const plusOne = document.createElement('div');
			plusOne.classList.add(styles.plusOne);
			plusOne.textContent = '+1';

			const rect = buttonRef.current?.getBoundingClientRect();
			if (rect) {
				plusOne.style.left = `${event.clientX - rect.left}px`;
				plusOne.style.top = `${event.clientY - rect.top}px`;
			}

			buttonRef.current?.appendChild(plusOne);
			setTimeout(() => {
				plusOne.remove();
			}, 1000);
		} else {
			alert('Max coins at this level reached');
		}
	};

	return (
		<div>
			<button
				ref={buttonRef}
				className={styles.clickButton}
				onClick={handleClick}
			></button>
		</div>
	);
};

export default ClickButton;
