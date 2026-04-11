import IconPeople from '../../ui/IconPeople';
import IconStar from '../../ui/IconStar';

function RoomCard({ obj, onClick }) {
  return (
    <article className="relative h-[149px] w-[206px] shrink-0 overflow-hidden rounded-2xl">

  
      <div
        role="button"
        
        className="absolute inset-0 cursor-pointer"
      >
        <img
          src={obj.imageUrl}
          alt={obj.roomName}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
      </div>

      <div className="relative flex h-full flex-col items-center justify-center gap-2.5 p-2">

  
        <h3
          role="button"
          
          
         
          className="cursor-pointer text-center text-base font-medium leading-none text-white"
        >
          {obj.roomName}
        </h3>


        <div className="flex items-center justify-center gap-1 pointer-events-none select-none">
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