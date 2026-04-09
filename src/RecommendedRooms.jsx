import RoomCard from './RoomCard';

const cardData = [
  {
    imageUrl: '/1room.svg',
    roomName: 'Ocean Meeting Room',
    peoples: '8-12 people',
    rating: '4.7',
    price: '$12 /hour',
    status: 'Available',
    type: 'All',
    isBook: true,
    isLike: true,
  },
  {
    imageUrl: '/2room.svg',
    roomName: 'Forest Focus Room',
    peoples: '2-4 people',
    rating: '4.3',
    price: '$10 /hour',
    status: 'Available',
    type: 'Small',
    isBook: false,
    isLike: true,
  },
  {
    imageUrl: '/3room.svg',
    roomName: 'British Library Hall',
    peoples: '6-8 people',
    rating: '4.9',
    price: '$25 /hour',
    status: 'Booked',
    type: 'Medium',
    isBook: true,
    isLike: false,
  },
  {
    imageUrl: '/4room.svg',
    roomName: 'Skyline Event Suite',
    peoples: '20-30 people',
    rating: '4.9',
    price: '$45 /hour',
    status: 'Available',
    type: 'Large',
    isBook: false,
    isLike: true,
  },
  {
    imageUrl: '/5room.svg',
    roomName: 'Mountain Peak Studio',
    peoples: '1-2 people',
    rating: '4.8',
    price: '$8 /hour',
    status: 'Available',
    type: 'Small',
    isBook: false,
    isLike: false,
  },
];
function RecommendedRooms() {
  return (
    <div className="recommended-rooms">
      <p>Recommended rooms</p>
      <p>View All</p>

      {cardData.map((obj) => (
        <RoomCard key={obj.roomName} obj={obj} />
      ))}
    </div>
  );
}

export default RecommendedRooms;
