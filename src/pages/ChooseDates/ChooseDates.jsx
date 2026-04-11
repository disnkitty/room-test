import { useState } from 'react';

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function getMonthDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  return { daysInMonth, startOffset };
}

function CalendarMonth({ year, month, selected, onSelect, today }) {
  const { daysInMonth, startOffset } = getMonthDays(year, month);
  const monthName = new Date(year, month).toLocaleString('en', { month: 'long' });

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

function ChooseDates({ onClose, onNext }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [selected, setSelected] = useState(null);

  const months = [
    { year: today.getFullYear(), month: today.getMonth() },
    {
      year: today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear(),
      month: today.getMonth() === 11 ? 0 : today.getMonth() + 1,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
      <div className="flex w-full max-w-[393px] flex-col rounded-t-2xl bg-white pt-4">

       
        <div className="flex justify-center mb-4">
          <div className="h-1 w-10 rounded-full bg-concrete" />
        </div>

        <div className="px-4">
         
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="flex h-6 w-6 items-center justify-center text-cinder text-lg"
            >
              ✕
            </button>
          </div>

        
          <h2 className="mb-5 text-xl font-semibold text-cinder">
            Choose dates
          </h2>

          
          <div className="grid grid-cols-7 border-y border-alabaster py-2 mb-2">
            {DAYS.map((d, i) => (
              <span
                key={i}
                className="flex h-[52px] items-center justify-center text-sm font-medium text-mist"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

       
        <div className="flex flex-col gap-6 overflow-y-auto max-h-[55vh] px-4">
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

       
        <div className="border-t border-concrete px-4 py-4">
          <button
            disabled={!selected}
            onClick={() => onNext?.(selected)}
            className={`h-12 w-full rounded-pill text-base font-medium transition-opacity
              ${selected
                ? 'bg-chartreuse text-cinder'
                : 'bg-concrete text-mist cursor-not-allowed'
              }
            `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChooseDates;