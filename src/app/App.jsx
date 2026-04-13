import RoomList from '@/pages/RoomList/RoomList';
import RoomDetails from '@/pages/RoomDetails/RoomDetails';
import { RoomsProvider } from '@/context/RoomsContext';
import ChooseDates from '@/pages/ChooseDates/ChooseDates';
import ChooseTime from '@/pages/ChooseTime/ChooseTime';
import Review from '@/pages/Review/Review';
import SuccessState from '@/pages/SuccessState/SuccessState';
import ErrorState from '@/pages/ErrorState/ErrorState';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  return (
    <Router>
      <RoomsProvider>
        <div className="flex min-h-screen w-full flex-col bg-[#F2F2F2] shadow-sm">
          <Routes>
            <Route path="/" element={<RoomList />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route
              path="/rooms/:id/date"
              element={<ChooseDates onNext={(date) => setSelectedDate(date)} />}
            />

            <Route
              path="/rooms/:id/date/time"
              element={
                <ChooseTime
                  selectedDate={selectedDate}
                  onNext={(time) => setSelectedTime(time)}
                />
              }
            />

            <Route
              path="/rooms/:id/date/time/review"
              element={
                <Review
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                />
              }
            />
            <Route path="/rooms/:id/success" element={<SuccessState />} />
            <Route path="/rooms/:id/error" element={<ErrorState />} />
          </Routes>
        </div>
      </RoomsProvider>
    </Router>
  );
}

export default App;
