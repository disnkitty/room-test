import RoomList from '../pages/RoomList/RoomList';
import RoomDetails from '../pages/RoomDetails/RoomDetails';
import { RoomsProvider } from '../../context/RoomsContext';
import ChooseDates from '../pages/ChooseDates/ChooseDates';
import ChooseTime from '../pages/ChooseTime/ChooseTime';
import Review from '../pages/Review/Review';

import SuccessState from '../pages/SuccessState/SuccessState';
import ErrorState from '../pages/ErrorState/ErrorState';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <RoomsProvider>
        <div className="flex min-h-screen w-full flex-col bg-[#F2F2F2] shadow-sm">
          <Routes>
            <Route path="/" element={<RoomList />} />
  <Route path="/rooms/:id" element={<RoomDetails />} />
  <Route path="/rooms/:id/date" element={<ChooseDates />} />
 
  <Route path="/rooms/:id/date/time" element={<ChooseTime />} />
  
  <Route path="/rooms/:id/date/time/review" element={<Review />} />
  <Route path="/rooms/:id/success" element={<SuccessState />} />
            {/* <Route path="*" element={<ErrorState />} /> */}
            {/* <Route path="/dates" element={<ChooseDates />} />
            <Route path="/time" element={<ChooseTime />} />
            <Route path="/review" element={<Review />} />
            <Route path="/success" element={<SuccessState />} />
            <Route path="/error" element={<ErrorState />} /> */}
          </Routes>
        </div>
      </RoomsProvider>
    </Router>
  );
}

export default App;
