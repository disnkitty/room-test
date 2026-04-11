import RoomCard from './RoomCard';

const cardData = [
  {
    imageUrl: '/2room.svg',
    roomName: 'Forest Focus Room',
    peoples: '2-4',
    rating: '4.3',
  },
  {
    imageUrl: '/3room.svg',
    roomName: 'British Room',
    peoples: '6-8',
    rating: '4.9',
  },
  {
    imageUrl: '/5room.svg',
    roomName: 'Meeting Room',
    peoples: '1-2',
    rating: '4.9',
  },
];

function RecommendedRooms() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4 pr-0">
        <h2 className="text-base font-semibold leading-none text-cinder">
          Recommended rooms
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
          <RoomCard key={obj.roomName} obj={obj} />
        ))}
      </div>
    </section>
  );
}

export default RecommendedRooms;
