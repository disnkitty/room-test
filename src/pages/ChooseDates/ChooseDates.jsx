import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import IconCross from '@/ui/IconCross';

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function getMonthDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  return { daysInMonth, startOffset };
}

function CalendarMonth({ year, month, selected, onSelect, today }) {
  const { daysInMonth, startOffset } = getMonthDays(year, month);
  const monthName = new Date(year, month).toLocaleString('en', {
    month: 'long',
  });

  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-base font-medium text-cinder">
        {monthName} {year}
      </h3>
      <div className="grid grid-cols-7">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} className="h-[52px]" />;

          const date = new Date(year, month, day);
          const isPast = date < today;
          const isSelected =
            selected &&
            selected.getDate() === day &&
            selected.getMonth() === month &&
            selected.getFullYear() === year;

          return (
            <button
              key={day}
              disabled={isPast}
              onClick={() => onSelect(date)}
              className={`flex h-[52px] w-full items-center justify-center text-base font-medium transition-colors
                ${isSelected ? 'rounded-full bg-cinder text-white' : ''}
                ${isPast ? 'text-mist line-through cursor-not-allowed' : 'text-cinder'}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ChooseDates({ onNext }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [selected, setSelected] = useState(null);

  const months = [
    { year: today.getFullYear(), month: today.getMonth() },
    {
      year:
        today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear(),
      month: today.getMonth() === 11 ? 0 : today.getMonth() + 1,
    },
  ];

  return (
    <div className="py-10 flex min-h-screen w-full items-center justify-center bg-[#F2F2F2] px-4">
      <div className="flex w-full max-w-[600px] flex-col rounded-2xl bg-white px-8 py-8 min-h-[calc(100vh-80px)]">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-cinder">Choose dates</h2>
          <button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-concrete text-cinder"
          >
            <IconCross />
          </button>
        </div>

        <div className="grid grid-cols-7 border-y border-concrete py-2 mb-4">
          {DAYS.map((d, i) => (
            <span
              key={i}
              className="flex h-12 items-center justify-center text-sm font-medium text-mist"
            >
              {d}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-6 overflow-y-auto max-h-[50vh] mb-6">
          {months.map(({ year, month }) => (
            <CalendarMonth
              key={`${year}-${month}`}
              year={year}
              month={month}
              selected={selected}
              onSelect={setSelected}
              today={today}
            />
          ))}
        </div>

        <Link to={`/rooms/${id}/date/time`}>
          <button
            disabled={!selected}
            onClick={() => onNext?.(selected)}
            className={`h-12 w-full transition-transform duration-200 hover:scale-105 rounded-pill text-base font-medium transition-opacity ${
              selected
                ? 'bg-chartreuse text-cinder'
                : 'bg-concrete text-mist cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ChooseDates;
