import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from '../features/reservationSlice';

// All slices are stored in here and passed as prop in the Provider wrapper
export const store = configureStore({
  reducer: {
    reservation: reservationReducer,
  },
});

// Type of the state of our application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
