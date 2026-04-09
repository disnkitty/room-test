function DetailRoomCard({ obj }) {
  return (
    <div className="detail-room-card">
      <img src={obj.imageUrl} alt={obj.roomName} className="room-image" />

      <h3 className="like">{obj.isLike}</h3>

      <h3 className="room-title">{obj.roomName}</h3>

      <div className="room-badges">
        <div className="badge">{obj.rating}</div>
        <div className="badge">{obj.peoples}</div>
        <div className="badge">{obj.status}</div>
        <div className="price">{obj.price}</div>
        <div className="book">{obj.isBook}</div>
      </div>
    </div>
  );
}

export default DetailRoomCard;
