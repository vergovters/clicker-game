import { combineReducers } from '@reduxjs/toolkit';
import coinReducer from './coins/slice';
import userReducer from './user/slice';

const rootReducer = combineReducers({
	coins: coinReducer,
	user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
