import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { RootState } from '../store/rootReducers';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
