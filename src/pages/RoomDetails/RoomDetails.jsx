import { useRooms } from '../../../context/RoomsContext';
import Content from './components/Content';
import Footer from './components/Footer';
import { useParams } from 'react-router-dom';

function RoomDetails() {
  const { rooms } = useRooms();
  const { id } = useParams();

  const room = rooms.find((r) => r.id === Number(id));

  return (
    <div className="relative flex min-h-screen flex-col bg-alabaster">
      <Content obj={room} />
      <Footer obj={room} />
    </div>
  );
}

export default RoomDetails;