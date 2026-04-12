import { useRooms } from '../../../context/RoomsContext';
import ReviewRoomCard from '../../features/rooms/ReviewRoomCard';
import Button from '../../ui/Button';

function Review() {
  const { rooms } = useRooms();
  const room = rooms[0];

  return (
    <div className="relative flex min-h-screen flex-col bg-[#F6F6F6]">
      <div className="flex flex-col items-center pt-4 px-4 pb-0 bg-white rounded-t-2xl">
        <ReviewRoomCard obj={room} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border border-[#F2F2F2] px-4 py-4">
        <Button className="w-full flex items-center justify-center py-4 bg-[#EAFF00] rounded-full text-base font-medium leading-none text-[#1A181C]">
          Book Free Now
        </Button>
      </div>
    </div>
  );
}

export default Review;
