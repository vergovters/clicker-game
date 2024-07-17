import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux';
import { INCREMENT } from 'src/store/coins/types';
import styles from './ClickButton.module.css';

const ClickButton = () => {
	const coins = useAppSelector((state) => state.coins.count);
	const dispatch = useAppDispatch();
	const maxProgress = 100; // Maximum progress value
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (coins < maxProgress) {
			dispatch({ type: INCREMENT });
			const plusOne = document.createElement('div');
			plusOne.classList.add(styles.plusOne);
			plusOne.textContent = '+1';

			const rect = buttonRef.current.getBoundingClientRect();
			plusOne.style.left = `${event.clientX - rect.left}px`;
			plusOne.style.top = `${event.clientY - rect.top}px`;

			buttonRef.current.appendChild(plusOne);
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
