import IconSuccess from '@/ui/IconSuccess';
import Button from '@/ui/Button';
import { useNavigate } from 'react-router-dom';

function SuccessState() {
  const navigate = useNavigate();

  return (
    <div className="py-10 flex min-h-screen w-full items-center justify-center bg-[#F2F2F2] px-4">
      <div className="flex w-full max-w-[600px] flex-col items-center rounded-2xl bg-white px-8 py-8 gap-8">
        <div className="flex flex-col items-center justify-center gap-5">
          <IconSuccess className="w-[164px] h-[164px]" />
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-semibold leading-none text-center text-cinder">
              Good job!
            </h3>
            <p className="text-sm font-medium leading-relaxed text-center text-mist">
              We'll notify you 5 minutes before it starts.
            </p>
          </div>
        </div>

        <Button
          onClick={() => navigate('/')}
          type="button"
          className="transition-transform duration-200 hover:scale-105 w-full flex items-center justify-center h-12 bg-chartreuse rounded-pill text-base font-medium leading-none text-cinder"
        >
          Done
        </Button>
      </div>
    </div>
  );
}

export default SuccessState;
