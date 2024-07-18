import { createAction } from '@reduxjs/toolkit';
import { INCREMENT_LVL } from './types';

export const incrementLvl = createAction<void>(INCREMENT_LVL);
