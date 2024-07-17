import { combineReducers } from '@reduxjs/toolkit';
import coinReducer from './coins/slice';

const rootReducer = combineReducers({
	coins: coinReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
