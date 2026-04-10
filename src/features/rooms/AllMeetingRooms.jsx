import DetailRoomCard from "./DetailRoomCard"

const cardData =[
    {
    imageUrl: '/6room.svg',
    roomName: 'Canyon Workshop',
    peoples: '10-15',
    rating: '4.6',
    price: '18',
    status: 'Available',
    type: 'All',
    isBook: true,
    isLike: true
  },
  {
    imageUrl: '/7room.svg',
    roomName: 'Desert Oasis Lounge',
    peoples: '4-6',
    rating: '4.5',
    price: '15',
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
    price: '5',
    status: 'Booked',
    type: 'Small',
    isBook: true,
    isLike: true
  },
  {
    imageUrl: '/9room.svg',
    roomName: 'Bamboo Zen Garden',
    peoples: '4-8',
    rating: '5.0',
    price: '22',
    status: 'Available',
    type: 'Medium',
    isBook: false,
    isLike: true
  },
  {
    imageUrl: '/10room.svg',
    roomName: 'Neon City Lab',
    peoples: '6-10',
    rating: '4.4',
    price: '20',
    status: 'Available',
    type: 'All',
    isBook: false,
    isLike: false
  }
]


function AllMeetingsRooms() {
    return (
        <div className="all-meeting-rooms">
          
            <button>
        All meeting rooms
      </button>
            <p>View all</p>
           {cardData.map((obj) => (
        <DetailRoomCard key={obj.roomName} obj={obj} />
      ))}
        </div>
    )
}

export default AllMeetingsRooms
