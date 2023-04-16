import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Single Customer Type
interface Customer {
  id: string;
  name: string;
  food: string[];
}
// Array of Customers Type
interface Customers {
  value: Customer[];
}

// Param Type of method "AddFoodToCustomer"
interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}
// State of Customers Array
const initialState: Customers = {
  value: [],
};

// Customer Slice - (ignore immutability as redux will settle)
export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    // Method 1
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    // Method 2
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

// Export as default to be stored in store
export default customerSlice.reducer;
export const { addCustomer, addFoodToCustomer } = customerSlice.actions;
