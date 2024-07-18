import { createSlice } from '@reduxjs/toolkit';
import { decrement, increment } from './actions';
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
		builder.addCase(increment, (state) => {
			state.count += 1;
		});

		builder.addCase(decrement, (state, action) => {
			state.count -= action.payload;
		});
	},
});

export default coinSlice.reducer;
