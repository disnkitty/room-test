import RoomCard from "./RoomCard";


  const cardData = [
  {
    imageUrl: '/1room',
    roomName: 'Ocean Meeting Room',
    peoples: '8-12 people',
    rating: '4.7',
    price: '$12 /hour',
    status: 'Available',
    type: 'All',
    isBook: true,
    isLike: true
  },
  {    imageUrl: '/2room',

    roomName: 'Forest Focus Room',
    peoples: '2-4 people',
    rating: '4.3',
    price: '$10 /hour',
    status: 'Available',
    type: 'Small',
    isBook: false,
    isLike: true
  },
  {    imageUrl: '/3room',

    roomName: 'British Library Hall',
    peoples: '6-8 people',
    rating: '4.9',
    price: '$25 /hour',
    status: 'Booked',
    type: 'Medium',
    isBook: true,
    isLike: false
  },
  {    imageUrl: '/4room',

    roomName: 'Skyline Event Suite',
    peoples: '20-30 people',
    rating: '4.9',
    price: '$45 /hour',
    status: 'Available',
    type: 'Large',
    isBook: false,
    isLike: true
  },
  {    imageUrl: '/5room',

    roomName: 'Mountain Peak Studio',
    peoples: '1-2 people',
    rating: '4.8',
    price: '$8 /hour',
    status: 'Available',
    type: 'Small',
    isBook: false,
    isLike: false
  },
  {    imageUrl: '/6room',

    roomName: 'Canyon Workshop',
    peoples: '10-15 people',
    rating: '4.6',
    price: '$18 /hour',
    status: 'Available',
    type: 'All',
    isBook: true,
    isLike: true
  },
  {    imageUrl: '/7room',

    roomName: 'Desert Oasis Lounge',
    peoples: '4-6 people',
    rating: '4.5',
    price: '$15 /hour',
    status: 'Available',
    type: 'Medium',
    isBook: false,
    isLike: false
  },
  {    imageUrl: '/8room',

    roomName: 'Arctic Silence Pod',
    peoples: '1 person',
    rating: '4.2',
    price: '$5 /hour',
    status: 'Booked',
    type: 'Small',
    isBook: true,
    isLike: true
  },
  {    imageUrl: '/9room',

    roomName: 'Bamboo Zen Garden',
    peoples: '4-8 people',
    rating: '5.0',
    price: '$22 /hour',
    status: 'Available',
    type: 'Medium',
    isBook: false,
    isLike: true
  },
  {    imageUrl: '/10room',

    roomName: 'Neon City Lab',
    peoples: '6-10 people',
    rating: '4.4',
    price: '$20 /hour',
    status: 'Available',
    type: 'All',
    isBook: false,
    isLike: false
  }
];
function RecommendedRooms() {
    return (
        <div className="recommended-rooms">
        <p>Recommended rooms</p>
        <p>View All</p>
        {/* <RoomCard name={'sd'} peoples={'sd'} rating={'sd'}/> */}
            {cardData.map(el => (<RoomCard roomName= {el.roomName}, peoples={el.peoples},  rating={el.rating} , price={el.price}, status={el.status}, type={el.type}, isBook={el.isBook}, isLike={el.isLike} />))}
        </div>
    )
}

export default RecommendedRooms
