import { createSlice } from '@reduxjs/toolkit';
import { INCREMENT_LVL } from './types';

interface UserState {
	userName: string;
	currentLvl: number;
	multiTap: number;
	isLoading: boolean;
	error: string | null;
}

const initialState: UserState = {
	userName: 'ikigai990',
	currentLvl: 1,
	multiTap: 1,
	isLoading: false,
	error: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(INCREMENT_LVL, (state) => {
			state.currentLvl += 1;
		});
	},
});

export default userSlice.reducer;
