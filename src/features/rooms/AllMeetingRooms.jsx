import DetailRoomCard from './DetailRoomCard';

const cardData = [
  {
    imageUrl: '/1room.svg',
    roomName: 'Ocean Meeting Room',
    peoples: '8-12',
    rating: '4.7',
    price: '12',
    status: 'Available',
  },
  {
    imageUrl: '/4room.svg',
    roomName: 'Skyline Event Room',
    peoples: '2-4',
    rating: '4.9',
    price: '8',
    status: 'Available',
  },
  {
    imageUrl: '/6room.svg',
    roomName: 'Berlin Conference Room',
    peoples: '12-16',
    rating: '4.3',
    price: '16',
    status: 'Available',
  },
];

function AllMeetingRooms() {
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
        {cardData.map((obj) => (
          <DetailRoomCard key={obj.roomName} obj={obj} />
        ))}
      </div>
    </section>
  );
}

export default AllMeetingRooms;
