// npm i react-redux @reduxjs/toolkit
// 1. Set up store - by 1st creating an app folder and store.tsx inside the folder (as per redux documentation)
// 2. configure store in the store.tsx
// 3. Import Provider in index.tsx and wrap around <App/> with store as main prop
// 4. Set up features folder (as per redux documentation) and start creating  respective slices as tsx files
// 5. From the slice files - export reducer and pass in store, export action methods to be used in components
// 6. To access the states of store in component, import the useSelector hook

import './App.css';
// useSelector hook
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

function App() {
  // To retrieve state of slice
  const reservations = useSelector(
    (state: RootState) => state.reservation.value
  );

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              <div className="reservation-card-container">Jon</div>
            </div>
          </div>
          <div className="reservation-input-container">
            <input />
            <button>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Oliver</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
