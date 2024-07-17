import { createAction } from '@reduxjs/toolkit';
import { INCREMENT } from './types';

export const increment = createAction<void>(INCREMENT);
