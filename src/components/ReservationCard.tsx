import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/reservationSlice';
// Prop type
interface ReservationCardType {
  name: string;
  index: number;
}

function ReservationCard({ name, index }: ReservationCardType) {
  const dispatch = useDispatch();
  const removeReservationHandler = () => {
    dispatch(removeReservation(index));
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
