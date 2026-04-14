import IconSuccess from '@/ui/IconSuccess';
import Button from '@/ui/Button';

function SuccessState({ onDone }) {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center gap-8 rounded-2xl bg-white px-8 py-8 shadow-xl">
      <div className="flex flex-col items-center justify-center gap-5">
        <IconSuccess className="h-[164px] w-[164px]" />
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-center text-xl font-semibold leading-none text-cinder">
            Good job!
          </h3>
          <p className="text-center text-sm font-medium leading-relaxed text-mist">
            We'll notify you 5 minutes before it starts.
          </p>
        </div>
      </div>

      <Button
        onClick={onDone}
        type="button"
        className="flex h-12 w-full items-center justify-center rounded-pill bg-chartreuse text-base font-medium leading-none text-cinder transition-transform duration-200 hover:scale-105"
      >
        Done
      </Button>
    </div>
  );
}

export default SuccessState;