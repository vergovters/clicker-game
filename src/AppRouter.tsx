import React from 'react';
import { MAIN_PAGE, SHOP_PAGE } from './utils/constants';
import MainScreen from './components/Main/MainScreen';
import { Route, Routes } from 'react-router';
import ShopScreen from './components/Shop/ShopScreen';

const AppRouter = () => {
	return (
		<Routes>
			<Route path={MAIN_PAGE} element={<MainScreen />} />
			<Route path={SHOP_PAGE} element={<ShopScreen />} />
		</Routes>
	);
};

export default AppRouter;
