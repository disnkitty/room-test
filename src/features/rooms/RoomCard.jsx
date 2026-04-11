import IconPeople from '../../ui/IconPeople';
import IconStar from '../../ui/IconStar';

function RoomCard({ obj }) {
  return (
    <article className="relative h-[149px] w-[206px] shrink-0 overflow-hidden rounded-2xl">
      <img
        src={obj.imageUrl}
        alt={obj.roomName}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden
      />
      <div className="relative flex h-full flex-col justify-end gap-2.5 p-2">
        <h3 className="text-center text-base font-medium leading-none text-white">
          {obj.roomName}
        </h3>
        <div className="mx-auto flex w-[190px] items-center justify-center gap-1">
          <div className="inline-flex h-6 items-center justify-center gap-1 rounded-pill bg-concrete px-2 py-1">
            <IconPeople size="sm" />
            <span className="text-[10px] font-medium leading-none text-cinder">
              {obj.peoples} people
            </span>
          </div>
          <div className="inline-flex h-6 items-center justify-center gap-1 rounded-pill bg-concrete px-2 py-1">
            <IconStar size="sm" variant="rating" />
            <span className="text-[10px] font-medium leading-none text-cinder">
              {obj.rating}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default RoomCard;
