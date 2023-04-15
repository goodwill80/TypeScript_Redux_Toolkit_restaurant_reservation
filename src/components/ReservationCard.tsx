// Prop type
interface ReservationCardType {
  name: string;
}

function ReservationCard({ name }: ReservationCardType) {
  return <div className="reservation-card-container">{name}</div>;
}

export default ReservationCard;
