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

function ChooseTime({ onTimeArrow, selectedDate, onNext, onTimeNextClick, onTimeClose }) {
  const [selected, setSelected] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const formattedDate = selectedDate?.toLocaleDateString('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    // 1. Оверлей — fixed на весь экран, на мобиле контент внизу, на десктопе по центру
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:py-10 md:px-4">

      {/* 2. Тёмный фон — клик закрывает модалку */}
      <div className="absolute inset-0 bg-black/50" onClick={onTimeClose} />

      {/* 3. Карточка — на мобиле скругление только сверху, на десктопе со всех сторон */}
      <div className="relative flex w-full md:max-w-[600px] flex-col rounded-t-2xl md:rounded-2xl bg-white px-8 py-8 max-h-[95vh] md:max-h-[calc(100vh-80px)]">

<div class="flex flex-row justify-center gap-2 mb-4 md:hidden">
  <div class="h-1 w-4 rounded-full bg-concrete"></div>
  <div class="h-1 w-10 rounded-full bg-black"></div>
  <div class="h-1 w-4 rounded-full bg-concrete"></div>
  <div class="h-1 w-4 rounded-full bg-concrete"></div>
</div>
        <div className="mb-6 flex items-center justify-between">
          <Button
            onClick={onTimeArrow}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-concrete text-cinder"
          >
            <IconArrow />
          </Button>

          <Button
            onClick={onTimeClose}
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

        <Button
          disabled={!selected}
          onClick={() => { onTimeNextClick?.(selected); }}
          className={`transition-transform duration-200 hover:scale-105 h-12 w-full rounded-pill text-base font-medium transition-opacity ${
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
