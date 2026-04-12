import Button from '../../ui/Button'
import IconStar from '../../ui/IconStar'
import IconPeople from '../../ui/IconPeople'
function ReviewRoomCard({ obj }) {
  return (
    <div className="flex flex-col gap-5 w-[361px]">
      <p className="text-xl font-semibold leading-none text-[#1A181C]">Review and Booking</p>

      <div className="w-full border border-[#F6F6F6] rounded-2xl p-3 flex flex-col gap-2.5">
        <div className="flex flex-col gap-5 w-full">

          <div className="flex flex-row items-start gap-3 w-full">
            <article className="relative h-[83px] w-[104px] shrink-0 overflow-hidden rounded-[6px]">
              <div role="button" className="absolute inset-0 cursor-pointer">
                <img
                  src={obj.imageUrl}
                  alt={obj.roomName}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" aria-hidden />
              </div>
            </article>

            <div className="flex flex-col gap-2 w-[166px]">
              <h3
                role="button"
                className="cursor-pointer text-base font-semibold leading-none text-[#1A181C]"
              >
                {obj.roomName}
              </h3>

              <div className="flex items-center gap-1 pointer-events-none select-none">
                <div className="inline-flex h-6 items-center justify-center gap-1 rounded-full bg-[#F2F2F2] px-2 py-1">
                  <IconStar size="sm" variant="rating" />
                  <span className="text-[10px] font-medium leading-none text-[#1A181C]">
                    {obj.rating}
                  </span>
                </div>
                <div className="inline-flex h-6 items-center justify-center gap-1 rounded-full bg-[#F2F2F2] px-2 py-1">
                  <IconPeople size="sm" />
                  <span className="text-[10px] font-medium leading-none text-[#1A181C]">
                    {obj.peoples} people
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between items-start w-full border-t border-[#F2F2F2] pt-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold leading-none text-[#1A181C]">Location</p>
              <p className="text-sm font-normal leading-[150%] text-[#1A181C]">{obj.address}</p>
            </div>
            <Button type="button">Details</Button>
          </div>

          <div className="flex flex-row justify-between items-center w-full border-t border-[#F2F2F2] pt-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold leading-none text-[#1A181C]">Dates</p>
              <p className="text-sm font-normal leading-[150%] text-[#1A181C]">{obj.date}</p>
              <p className="text-sm font-normal leading-[150%] text-[#1A181C]">{obj.timeRange}</p>
            </div>
            <Button type="button">Change</Button>
          </div>

          <div className="flex flex-row justify-between items-start w-full border-t border-[#F2F2F2] pt-4 pb-2">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold leading-none text-[#1A181C]">Total price</p>
              <p className="text-sm font-normal leading-[150%] text-[#1A181C]">${obj.price * 2} USD</p>
            </div>
            <Button type="button">Details</Button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ReviewRoomCard;
