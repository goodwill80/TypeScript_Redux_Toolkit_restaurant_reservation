// npm i react-redux @reduxjs/toolkit
// 1. Set up store - by 1st creating an app folder and store.tsx inside the folder (as per redux documentation)
// 2. configure store in the store.tsx
// 3. Import Provider in index.tsx and wrap around <App/> with store as main prop
// 4. Set up features folder (as per redux documentation) and start creating  respective slices as tsx files
// 5. From the slice files - export reducer and pass in store, export action methods to be used in components
// 6. To access the states of store in component, import the useSelector hook
import { useState } from 'react';
import './App.css';
// Import useSelector hook, useDispatch hook
import { useSelector, useDispatch } from 'react-redux';
// Import action from slice
import { addReservation } from './features/reservationSlice';
// Import type of state
import { RootState } from './app/store';
// Components
import ReservationCard from './components/ReservationCard';
import CustomerCard from './components/CustomerCard';

function App() {
  // Form state
  const [reservationNameInput, setReservationNameInput] = useState<string>('');

  // To retrieve Reservation State in configure store
  const reservations = useSelector(
    (state: RootState) => state.reservation.value
  );

  // To retrieve Customer State in configure store
  const customers = useSelector((state: RootState) => state.customer.value);

  // To call method from slice to dispatch action
  const dispatch = useDispatch();
  const handleAddReservation = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput('');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              type="text"
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer, index) => {
            return (
              <CustomerCard
                name={customer.name}
                id={customer.id}
                food={customer.food}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
