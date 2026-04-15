import { useRooms } from '@/context/RoomsContext';
import ReviewRoomCard from '@/features/rooms/components/ReviewRoomCard';
import Button from '@/ui/Button';
import { Link, useParams, useNavigate } from 'react-router-dom';
import IconArrow from '@/ui/IconArrow';
import IconCross from '@/ui/IconCross';

function Review({ onReviewClose, onReviewArrow, selectedDate, selectedTime, onBookFreeNow }) {
  const { rooms } = useRooms();
  const { id } = useParams();

  const room = rooms.find((r) => r.id === Number(id)) || rooms[0];

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:py-10 md:px-4">

      <div className="absolute inset-0 bg-black/50" onClick={onReviewClose} />

      <div className="relative flex w-full md:max-w-[600px] flex-col rounded-t-2xl md:rounded-2xl bg-white px-8 py-8 max-h-[95vh] md:max-h-[calc(100vh-80px)]">

<div class="flex flex-row justify-center gap-2 mb-4 md:hidden">
  <div class="h-1 w-4 rounded-full bg-concrete"></div>
  <div class="h-1 w-4 rounded-full bg-concrete"></div>
  <div class="h-1 w-10 rounded-full bg-black"></div>
  <div class="h-1 w-4 rounded-full bg-concrete"></div>
</div>
        <div className="mb-6 flex items-center justify-between">
          <Button
            onClick={onReviewArrow}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-concrete text-cinder"
          >
            <IconArrow />
          </Button>
          <Button
            onClick={onReviewClose}
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

        <Button
          onClick={onBookFreeNow}
          className="transition-transform duration-200 hover:scale-105 w-full flex items-center justify-center h-12 bg-chartreuse rounded-pill text-base font-medium leading-none text-cinder"
        >
          Book Free Now
        </Button>
      </div>
    </div>
  );
}

export default Review;