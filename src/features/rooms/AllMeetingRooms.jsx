import DetailRoomCard from './DetailRoomCard';

import { useRooms } from '../../../context/RoomsContext';

function  AllMeetingRooms() {
  const { rooms } = useRooms();
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-base font-semibold leading-none text-cinder">
          All meeting rooms
        </h2>
        <button
          type="button"
          className="border-0 bg-transparent p-0 text-sm font-normal leading-[150%] text-mist"
        >
          View All
        </button>
      </div>
      <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {rooms.map((obj) => (
          <DetailRoomCard key={obj.id} obj={obj} />
        ))}
      </div>
    </section>
  );
}

export default AllMeetingRooms;
