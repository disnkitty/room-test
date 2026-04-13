import Button from '@/ui/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconArrow from '@/ui/IconArrow';
import IconCross from '@/ui/IconCross';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const TIME_SLOTS = [
  '09:00 AM - 11:00 AM',
  '15:00 PM - 17:00 PM',
  '17:30 PM - 19:00 PM',
];

function ChooseTime({ selectedDate, onNext }) {
  const [selected, setSelected] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const formattedDate = selectedDate?.toLocaleDateString('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="py-10 flex min-h-screen w-full items-center justify-center bg-[#F2F2F2] px-4">
      <div className="flex w-full max-w-[600px] flex-col rounded-2xl bg-white px-8 py-8 min-h-[580px]">
        <div className="mb-6 flex items-center justify-between">
          <Button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-concrete text-cinder"
          >
            <IconArrow />
          </Button>

          <Button
            onClick={() => navigate(-2)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-concrete text-cinder"
          >
            <IconCross />
          </Button>
        </div>

        <h2 className="mb-6 text-2xl font-semibold text-cinder">
          Choose check-in time
        </h2>

        <div className="mb-4 flex flex-col gap-1">
          <span className="text-base font-medium text-cinder">
            Available time slots
          </span>
          <p></p>
          <span className="text-sm font-medium text-mist">{formattedDate}</span>
        </div>

        <div className="flex flex-col rounded-2xl border border-concrete overflow-hidden mb-6">
          {TIME_SLOTS.map((slot) => (
            <Button
              key={slot}
              onClick={() => setSelected(slot)}
              className="flex items-center justify-between border-b border-concrete px-4 py-4 last:border-0 hover:bg-concrete transition-colors"
            >
              <span className="text-base font-medium text-cinder">{slot}</span>
              <div
                className={`h-5 w-5 rounded-full border transition-colors ${
                  selected === slot
                    ? 'border-cinder bg-cinder'
                    : 'border-mist bg-white'
                }`}
              />
            </Button>
          ))}
        </div>

        <Button className="mb-4 flex h-11 w-full items-center justify-center rounded-pill bg-concrete text-sm font-medium text-cinder">
          Request custom time
        </Button>

        <Link to={`/rooms/${id}/date/time/review`}>
          <Button
            disabled={!selected}
            onClick={() => onNext?.(selected)}
            className={`transition-transform duration-200 hover:scale-105 h-12 w-full rounded-pill text-base font-medium transition-opacity ${
              selected
                ? 'bg-chartreuse text-cinder'
                : 'cursor-not-allowed bg-concrete text-mist'
            }`}
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ChooseTime;
