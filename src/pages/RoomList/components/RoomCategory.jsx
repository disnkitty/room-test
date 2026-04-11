function RoomCategory({ name, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`shrink-0 rounded-pill px-5 py-3 text-base font-normal leading-none transition-colors ${
        isActive
          ? 'bg-cinder text-white'
          : 'bg-white text-mist'
      }`}
    >
      {name}
    </button>
  );
}

export default RoomCategory;
