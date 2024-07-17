import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux';
import { INCREMENT } from 'src/store/coins/types';

const MainScreen = () => {
	const coins = useAppSelector((state) => state.coins.count);
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch({ type: INCREMENT });
	};

	return (
		<div>
			<h1>MainScreen</h1>
			{coins}
			<div>
				<button onClick={handleClick}>Increment</button>
			</div>
		</div>
	);
};

export default MainScreen;
