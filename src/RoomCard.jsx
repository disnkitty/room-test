function RoomCard({ obj }) {
  return (
    <div className="room-card">
      <img src={obj.imageUrl} alt={obj.roomName} className="room-image" />

      <div className="room-overlay"></div>
      <div className="room-title">{obj.roomName}</div>

      <div className="room-badges">
        <div className="badge">{obj.peoples}</div>
        <div className="badge">{obj.rating}</div>
      </div>
    </div>
  );
}

export default RoomCard;
