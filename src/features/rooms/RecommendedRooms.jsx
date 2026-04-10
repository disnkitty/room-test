import RoomCard from "./RoomCard";

const cardData = [
  {
    imageUrl: '/1room.svg',
    roomName: 'Ocean Meeting Room',
    peoples: '8-12',
    rating: '4.7',
    price: '12',
    status: 'Available',
    type: 'All',
    isBook: true,
    isLike: true,
  },
  {
    imageUrl: '/2room.svg',
    roomName: 'Forest Focus Room',
    peoples: '2-4',
    rating: '4.3',
    price: '10',
    status: 'Available',
    type: 'Small',
    isBook: false,
    isLike: true,
  },
  {
    imageUrl: '/3room.svg',
    roomName: 'British Library Hall',
    peoples: '6-8',
    rating: '4.9',
    price: '25',
    status: 'Booked',
    type: 'Medium',
    isBook: true,
    isLike: false,
  },
  {
    imageUrl: '/4room.svg',
    roomName: 'Skyline Event Suite',
    peoples: '20-30',
    rating: '4.9',
    price: '45',
    status: 'Available',
    type: 'Large',
    isBook: false,
    isLike: true,
  },
  {
    imageUrl: '/5room.svg',
    roomName: 'Mountain Peak Studio',
    peoples: '1-2',
    rating: '4.8',
    price: '8',
    status: 'Available',
    type: 'Small',
    isBook: false,
    isLike: false,
  },
];
function RecommendedRooms() {
  return (
    <div className="recommended-rooms">
      
      <button>
        Recommended rooms
      </button>
      <p>View All</p>

      {cardData.map((obj) => (
        <RoomCard key={obj.roomName} obj={obj} />
      ))}
    </div>
  );
}

export default RecommendedRooms;
