import { useRooms } from '../../../context/RoomsContext';
import ReviewRoomCard from '../../features/rooms/ReviewRoomCard';
import Button from '../../ui/Button';
import { Link, useParams, useNavigate } from 'react-router-dom';
import IconArrow from '../../ui/IconArrow';
import IconCross from '../../ui/IconCross';

function Review() {
  const { rooms } = useRooms();
  const { id } = useParams();
  const navigate = useNavigate();

  const room = rooms.find((r) => r.id === Number(id)) || rooms[0];

  return (
    <div className="py-10 flex min-h-screen w-full items-center justify-center bg-[#F2F2F2] px-4">
      <div className="flex w-full max-w-[600px] flex-col rounded-2xl bg-white px-8 py-8">

       
        <div className="mb-6 flex items-center justify-between">
          <Button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-concrete text-cinder"
          >
            <IconArrow />
          </Button>

          <div className="flex items-center gap-1">
            <div className="h-1 w-3.5 rounded-full bg-concrete" />
            <div className="h-1 w-3.5 rounded-full bg-concrete" />
            <div className="h-1 w-7 rounded-full bg-cinder" />
          </div>

          <Button
            onClick={() => navigate('/')}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-concrete text-cinder"
          >
            <IconCross />
          </Button>
        </div>

      
        <ReviewRoomCard obj={room} id={id} />

       
        <Link to={`/rooms/${id}/success`} className="mt-6">
          <Button className="w-full flex items-center justify-center h-12 bg-chartreuse rounded-pill text-base font-medium leading-none text-cinder">
            Book Free Now
          </Button>
        </Link>

      </div>
    </div>
  );
}

export default Review;