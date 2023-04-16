import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

function CustomerCard({ id, name, food }: CustomerCardType) {
  // State to capture form input
  const [customerInput, setCustomerInput] = useState<string>('');
  // Habdle form change
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCustomerInput(e.target.value);
  // Initialise useDispatch
  const dispatch = useDispatch();
  // Handle addFoodToCustomer
  const addFoodToCustomerHandler = () => {
    if (!customerInput) return;
    dispatch(addFoodToCustomer({ id: id, food: customerInput }));
    setCustomerInput('');
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            type="text"
            value={customerInput}
            onChange={handleFormChange}
          />
          <button onClick={addFoodToCustomerHandler}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
