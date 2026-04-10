function RoomCategory({ name }) {
  return (
    <div className="room-category">
      <Button text={name} size='medium' color='white'/>
      <button>
        {name}
      </button>
    </div>
  );
}

export default RoomCategory;
