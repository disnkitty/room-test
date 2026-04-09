import SearchInput from './SearchInput';
import RoomOptions from './RoomOptions';
import RecommendedRooms from './RecommendedRooms';
import AllMeetingsRooms from './AllMeetingRooms';

function Content() {
  return (
    <div className="content">
      <SearchInput />
      <RoomOptions />
      <RecommendedRooms />
      <AllMeetingsRooms/>
    </div>
  );
}

export default Content;
