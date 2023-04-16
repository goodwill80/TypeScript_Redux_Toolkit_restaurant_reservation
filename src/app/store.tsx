import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from '../features/reservationSlice';
import customerReducer from '../features/customerSlice';

// All slices are stored in here and passed as prop in the Provider wrapper
// Please refer to index.tsx
export const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    customer: customerReducer,
  },
});

// Type of the state of our application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
