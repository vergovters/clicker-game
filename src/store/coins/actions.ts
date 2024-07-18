import { createAction } from '@reduxjs/toolkit';
import { DECREMENT, INCREMENT } from './types';

export const increment = createAction<void>(INCREMENT);

export const decrement = createAction<number>(DECREMENT);
