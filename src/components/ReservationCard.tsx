import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/reservationSlice';
import { addCustomer } from '../features/customerSlice';
// import { v4 as uuidv4 } from 'uuid';
// Prop type
interface ReservationCardType {
  name: string;
  index: number;
}

function ReservationCard({ name, index }: ReservationCardType) {
  // Initialise useDispatch
  const dispatch = useDispatch();
  // Handler method to call the dispatch
  const removeReservationHandler = () => {
    dispatch(removeReservation(index));
    dispatch(
      addCustomer({
        id: 'abc' + Math.random() * 100 + '/' + Math.random() * 1000,
        name,
        food: [],
      })
    );
  };

  return (
    <div
      onClick={removeReservationHandler}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
}

export default ReservationCard;
