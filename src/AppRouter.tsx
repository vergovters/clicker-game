import React from 'react';
import {
	MAIN_PAGE,
	PROFILE_PAGE,
	SHOP_PAGE,
	TASK_PAGE,
} from './utils/constants';
import MainScreen from './components/Main/MainScreen';
import { Route, Routes } from 'react-router';
import ShopScreen from './components/Shop/ShopScreen';
import TaskScreen from './components/Tasks/TaskScreen';
import ProfileScreen from './components/Pofile/ProfileScreen';

const AppRouter = () => {
	return (
		<Routes>
			<Route path={MAIN_PAGE} element={<MainScreen />} />
			<Route path={SHOP_PAGE} element={<ShopScreen />} />
			<Route path={TASK_PAGE} element={<TaskScreen />} />
			<Route path={PROFILE_PAGE} element={<ProfileScreen />} />
			<Route path='*' element={<MainScreen />} />
		</Routes>
	);
};

export default AppRouter;
