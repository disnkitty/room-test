import { useState } from 'react';
import RoomCategory from './RoomCategory';

const ROOM_CATEGORIES = [
  'All rooms',
  'Small (2-4)',
  'Medium (4-12)',
  'Large (12+)',
];

function RoomOptions() {
  const [active, setActive] = useState(ROOM_CATEGORIES[0]);

  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-0 pt-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {ROOM_CATEGORIES.map((name) => (
        <RoomCategory
          key={name}
          name={name}
          isActive={active === name}
          onSelect={() => setActive(name)}
        />
      ))}
    </div>
  );
}

export default RoomOptions;
