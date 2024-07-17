import { createSlice } from '@reduxjs/toolkit';
import { INCREMENT } from 'src/utils/constants';
interface CoinState {
	count: number;
	isLoading: boolean;
	error: string | null;
}

const initialState: CoinState = {
	count: 0,
	isLoading: false,
	error: null,
};

export const coinSlice = createSlice({
	name: 'coin',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(INCREMENT, (state) => {
			state.count += 1;
		});
	},
});

export default coinSlice.reducer;
