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
// - (ignore immutability as redux will settle)
export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    // Method 1
    addReservation: (
      state: typeof initialState,
      action: PayloadAction<string>
    ) => {
      state.value.push(action.payload);
    },
    // Method 2
    removeReservation: (
      state: typeof initialState,
      action: PayloadAction<number>
    ) => {
      state.value.splice(action.payload, 1);
    },
  },
});

// Export the actions which is store as an object from createSlice()
export const { addReservation, removeReservation } = reservationSlice.actions;

// Export as default to be passed into store
// once the reservation is initialised via createSlice - a reducer obj will be stored inside. This needs to be exported.
export default reservationSlice.reducer; // import as "reservationReducer" to be used in the configure store
