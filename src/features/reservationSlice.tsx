import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Type of initial state
interface ReservationType {
  value: string[];
}

// Initial state - reservation names will be stored here
const initialState: ReservationType = {
  value: [],
};

// Create slice - comprising of name, initial state and all the reducer methods
export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservation: (
      state: typeof initialState,
      action: PayloadAction<string>
    ) => {
      state.value.push(action.payload);
    },
  },
});

// Export the actions which is store as an object from createSlice()
export const { addReservation } = reservationSlice.actions;

// Export as default to be passed into store
// once the reservation is initialised via createSlice - a reducer obj will be stored inside. This needs to be exported.
export default reservationSlice.reducer; // to be used in the configure store
