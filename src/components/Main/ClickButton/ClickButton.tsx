import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux';
import { INCREMENT } from 'src/store/coins/types';
import styles from './ClickButton.module.css'; // Import your CSS module
import planet1 from 'src/assets/planets/planet1.png';
import planet2 from 'src/assets/planets/planet2.png';
import planet3 from 'src/assets/planets/planet3.png';
import planet4 from 'src/assets/planets/planet4.png';
import planet5 from 'src/assets/planets/planet5.png';
import planet6 from 'src/assets/planets/planet6.png';
import planet7 from 'src/assets/planets/planet7.png';

const planets = [planet1, planet2, planet3, planet4, planet5, planet6, planet7];

const ClickButton = () => {
	const dispatch = useAppDispatch();
	const lvl = useAppSelector((state) => state.user.currentLvl);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const button = buttonRef.current;
		if (button) {
			button.style.backgroundImage = `url(${planets[lvl - 1]})`;

			if (isAnimating) {
				button.classList.add(styles.shrinkAndFly);
				setTimeout(() => {
					button.classList.remove(styles.shrinkAndFly);
					button.style.backgroundImage = `url(${planets[lvl - 1]})`;
					setIsAnimating(false);
				}, 500);
			}
		}
	}, [lvl]);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
