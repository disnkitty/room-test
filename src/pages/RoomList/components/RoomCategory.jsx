import AllMeetingRooms from '../../../features/rooms/AllMeetingRooms';
import RecommendedRooms from '../../../features/rooms/RecommendedRooms';
import Button from '../../../ui/Button';
function RoomCategory({ name, isActive, onSelect }) {
  // const [tab, setTab] = useState(
  //   (name === 'All rooms' && 'all') |
  //     (name === 'Small (2-4)' && 'small') |
  //     (name === 'Medium (4-12)' && 'mediuml') |
  //     (name === 'Large (12+)' && 'large'),
  // );


  return (
    <Button
      type="button"
      onClick={onSelect}
      className={`mb-2 transition-transform duration-200 hover:scale-110 mt-2 shrink-0 rounded-pill px-5 py-3 text-base font-normal leading-none transition-colors ${
        isActive ? 'bg-cinder text-white' : 'bg-white text-mist'
      }`}
    >
      {name}
    </Button>
    
    
  );
}

export default RoomCategory;
