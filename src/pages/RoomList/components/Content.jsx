import SearchInput from '../../../features/search-input/SearchInput';
import RoomOptions from './RoomOptions';
import RecommendedRooms from '../../../features/rooms/RecommendedRooms';
import AllMeetingRooms from '../../../features/rooms/AllMeetingRooms';

function Content() {
  return (
    <main className="flex flex-1 flex-col gap-6 px-4 pb-28 pt-4">
      <div className="flex flex-col gap-4">
        <SearchInput />
        <RoomOptions />
      </div>
      <div className="flex flex-col gap-6">
        <RecommendedRooms />
        <AllMeetingRooms />
      </div>
    </main>
  );
}

export default Content;
