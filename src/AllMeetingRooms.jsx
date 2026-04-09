import DetailRoomCard from "./DetailRoomCard"

const cardData =[
    {
    imageUrl: '/6room.svg',
    roomName: 'Canyon Workshop',
    peoples: '10-15 people',
    rating: '4.6',
    price: '$18 /hour',
    status: 'Available',
    type: 'All',
    isBook: true,
    isLike: true
  },
  {
    imageUrl: '/7room.svg',
    roomName: 'Desert Oasis Lounge',
    peoples: '4-6 people',
    rating: '4.5',
    price: '$15 /hour',
    status: 'Available',
    type: 'Medium',
    isBook: false,
    isLike: false
  },
  {
    imageUrl: '/8room.svg',
    roomName: 'Arctic Silence Pod',
    peoples: '1 person',
    rating: '4.2',
    price: '$5 /hour',
    status: 'Booked',
    type: 'Small',
    isBook: true,
    isLike: true
  },
  {
    imageUrl: '/9room.svg',
    roomName: 'Bamboo Zen Garden',
    peoples: '4-8 people',
    rating: '5.0',
    price: '$22 /hour',
    status: 'Available',
    type: 'Medium',
    isBook: false,
    isLike: true
  },
  {
    imageUrl: '/10room.svg',
    roomName: 'Neon City Lab',
    peoples: '6-10 people',
    rating: '4.4',
    price: '$20 /hour',
    status: 'Available',
    type: 'All',
    isBook: false,
    isLike: false
  }
]


function AllMeetingsRooms() {
    return (
        <div className="all-meeting-rooms">
            <p>All meeting rooms</p>
            <p>View all</p>
           {cardData.map((obj) => (
        <DetailRoomCard key={obj.roomName} obj={obj} />
      ))}
        </div>
    )
}

export default AllMeetingsRooms
