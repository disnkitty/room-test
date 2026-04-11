import { useRooms } from '../../../context/RoomsContext';
import Content from './components/Content';
import Footer from './components/Footer';

function RoomDetails() {
  const { rooms } = useRooms();
  const room = rooms[0];

  return (
    <div className="relative flex min-h-screen flex-col bg-alabaster">
      <Content obj={room} />
      <Footer obj={room} />
    </div>
  );
}

export default RoomDetails;