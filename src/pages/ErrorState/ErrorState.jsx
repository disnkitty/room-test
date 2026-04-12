import IconError from '../../ui/IconError';
import Button from '../../ui/Button';

function ErrorState() {
  return (
    <div className="flex flex-col items-center justify-between w-[393px] h-[810px] bg-white rounded-t-2xl pt-4">
      <div className="flex flex-col items-center justify-center gap-5 w-[361px] flex-1">
        <IconError className="w-[164px] h-[164px]" />
        <div className="flex flex-col items-center justify-center gap-4 w-[240px]">
          <h3 className="w-full text-xl font-semibold leading-none text-center text-[#1A181C]">
            Something went wrong
          </h3>
          <p className="w-full text-sm font-medium leading-none text-center text-[#818181]">
            We couldn't complete your booking.
          </p>
        </div>
      </div>

      <div className="w-full border border-[#F2F2F2] bg-white p-4">
        <Button
          type="button"
          className="w-full flex items-center justify-center py-4 px-5 bg-[#EAFF00] rounded-full text-base font-medium leading-none text-[#1A181C]"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}

export default ErrorState;