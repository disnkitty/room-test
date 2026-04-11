import RoomList from '../pages/RoomList/RoomList';
import RoomDetails from '../pages/RoomDetails/RoomDetails';
import { RoomsProvider } from '../../context/RoomsContext';
import ChooseDates from '../pages/ChooseDates/ChooseDates';
import ChooseTime from '../pages/ChooseTime/ChooseTime';

function App() {
  return (
    <RoomsProvider>
      <div className=" flex min-h-screen w-full flex-col bg-[#F2F2F2] shadow-sm">
        <RoomList />
        <RoomDetails />
        <ChooseDates />
        <ChooseTime />
      </div>
    </RoomsProvider>
  );
}

export default App;
