import { useRooms } from '@/context/RoomsContext';
import ReviewRoomCard from '@/features/rooms/components/ReviewRoomCard';
import Button from '@/ui/Button';
import { Link, useParams, useNavigate } from 'react-router-dom';
import IconArrow from '@/ui/IconArrow';
import IconCross from '@/ui/IconCross';

function Review({ selectedDate, selectedTime }) {
  const { rooms } = useRooms();
  const { id } = useParams();
  const navigate = useNavigate();

  const room = rooms.find((r) => r.id === Number(id)) || rooms[0];

  return (
    <div className="py-10 flex min-h-screen w-full items-center justify-center bg-[#F2F2F2] px-4">
      <div className="flex w-full max-w-[600px] flex-col rounded-2xl bg-white px-8 py-8 min-h-[580px]">
        <div className="mb-6 flex items-center justify-between">
          <Button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-concrete text-cinder"
          >
            <IconArrow />
          </Button>
          <Button
            onClick={() => navigate('/')}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-concrete text-cinder"
          >
            <IconCross />
          </Button>
        </div>
        <ReviewRoomCard
          obj={room}
          id={id}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
        />
        <Link to={`/rooms/${id}/success`} className="mt-6">
          <Button className="transition-transform duration-200 hover:scale-105 w-full flex items-center justify-center h-12 bg-chartreuse rounded-pill text-base font-medium leading-none text-cinder">
            Book Free Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Review;
