import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PersonSlice } from './features/personSlice';

export const store = configureStore({
  reducer: {
    pserson: PersonSlice.reducer,
  },
});

export const userAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
