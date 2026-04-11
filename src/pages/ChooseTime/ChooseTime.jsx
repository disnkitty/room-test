import Button from '../../ui/Button';
import { useState } from 'react';

const TIME_SLOTS = [
  '09:00 AM - 11:00 AM',
  '15:00 PM - 17:00 PM',
  '17:30 PM - 19:00 PM',
];

function ChooseTime({ selectedDate, onBack, onClose, onNext }) {
  const [selected, setSelected] = useState(null);

  const formattedDate = selectedDate?.toLocaleDateString('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
      <div className="flex w-full max-w-[393px] flex-col rounded-t-2xl bg-white px-4 pb-6 pt-4">
        <div className="mb-4 flex justify-center">
          <div className="h-1 w-10 rounded-full bg-concrete" />
        </div>

        <div className="mb-5 flex items-center justify-between">
          <Button
            onClick={onBack}
            className="flex h-6 w-6 items-center justify-center text-cinder"
          >
            ←
          </Button>

          <div className="flex items-center gap-1">
            <div className="h-1 w-3.5 rounded-full bg-concrete" />
            <div className="h-1 w-7 rounded-full bg-cinder" />
            <div className="h-1 w-3.5 rounded-full bg-concrete" />
          </div>

          <Button
            onClick={onClose}
            className="flex h-6 w-6 items-center justify-center text-cinder"
          >
            ✕
          </Button>
        </div>

        <h2 className="mb-5 text-xl font-semibold text-cinder">
          Choose check-in-time
        </h2>

        <div className="mb-3 flex flex-col gap-1">
          <span className="text-base font-medium text-cinder">
            Available time slots
          </span>
          <span className="text-xs font-medium text-mist">{formattedDate}</span>
        </div>

        <div className="flex flex-col">
          {TIME_SLOTS.map((slot) => (
            <Button
              key={slot}
              onClick={() => setSelected(slot)}
              className="flex items-center justify-between border-b border-[#F6F6F6] py-3"
            >
              <span className="text-sm font-medium text-cinder">{slot}</span>
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

        <Button className="mt-3 flex h-[38px] w-full items-center justify-center rounded-pill bg-concrete text-sm font-medium text-cinder">
          Request custom time
        </Button>

        <Button
          disabled={!selected}
          onClick={() => onNext?.(selected)}
          className={`mt-6 h-12 w-full rounded-pill text-base font-medium transition-opacity ${
            selected
              ? 'bg-chartreuse text-cinder'
              : 'cursor-not-allowed bg-concrete text-mist'
          }`}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default ChooseTime;
