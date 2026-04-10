import SearchInput from '../../../features/search-input/SearchInput';
import RoomOptions from './RoomOptions';
import RecommendedRooms from '../../../features/rooms/RecommendedRooms';

function Content() {
  return (
    <div className="content">
      <SearchInput />
      <RoomOptions />
      <RecommendedRooms />

      {/* <RoomOptions />
      <RecommendedRooms />
      <AllMeetingsRooms/> */}
    </div>
  );
}

export default Content;
