import IconSuccess from '@/ui/IconSuccess';
import Button from '@/ui/Button';

function SuccessState({ onDone, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:py-10 md:px-4">

      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative flex w-full md:max-w-[600px] flex-col items-center gap-8 rounded-t-2xl md:rounded-2xl bg-white px-8 py-8 max-h-[95vh] md:max-h-[calc(100vh-80px)]">

<div class="flex flex-row justify-center gap-2 mb-4 md:hidden">
  <div class="h-1 w-4 rounded-full bg-concrete"></div>
  <div class="h-1 w-4 rounded-full bg-concrete"></div>
  <div class="h-1 w-4 rounded-full bg-concrete"></div>
  <div class="h-1 w-10 rounded-full bg-black"></div>
</div>
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
    </div>
  );
}

export default SuccessState;