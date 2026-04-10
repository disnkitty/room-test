import RoomCategory from "./RoomCategory";
const roomCategoryData = [
  'All rooms',
  'Small (2-4)',
  'Medium (4-12)',
  'Event Hall (50+)',
];

function RoomOptions() {
  return (
    <div className="room-options">
      {roomCategoryData.map((name) => (
        <RoomCategory name={name} />
      ))}
    </div>
  );
}

export default RoomOptions;
