import RoomList from '../pages/RoomList/RoomList';
import RoomDetails from '../pages/RoomDetails/RoomDetails';
import { RoomsProvider } from '../../context/RoomsContext';
import ChooseDates from '../pages/ChooseDates/ChooseDates';
import ChooseTime from '../pages/ChooseTime/ChooseTime';
import Review from '../pages/Review/Review';
import SuccessState from '../pages/SuccessState/SuccessState';
import ErrorState from '../pages/ErrorState/ErrorState';
import RoomCard from '../features/rooms/RoomCard';



import {Link, Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import RoomCard from '../features/rooms/RoomCard';

function App() {
  return (

    <Router>
      <RoomsProvider>
      <div className=" flex min-h-screen w-full flex-col bg-[#F2F2F2] shadow-sm">
       <Link to='/'><RoomList/></Link>
       



        {/* <RoomList />
        <RoomDetails />
         <ChooseDates />
        <ChooseTime />
        <Review/> 
        <SuccessState/>
        <ErrorState/> */}
      </div>
    </RoomsProvider>

<Routes>
<Route

</Routes>



    </Router>
    
  );
}

export default App;
