import { useRooms } from '@/context/RoomsContext';
import ChooseDates from '@/pages/ChooseDates/ChooseDates';
import ChooseTime from '@/pages/ChooseTime/ChooseTime';
import Review from '@/pages/Review/Review';
import SuccessState from '@/pages/SuccessState/SuccessState';

import Content from './components/Content';
import Footer from './components/Footer';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
function RoomDetails() {
  const { rooms } = useRooms();
  const { id } = useParams();
  const [modal, setModal] = useState(null);

  const room = rooms.find((r) => r.id === Number(id));

  return (
    <div className="relative flex min-h-screen flex-col bg-alabaster">
      <Content obj={room} />
      <Footer
        obj={room}
        onBookClick={() => setModal('date')}
        onBookSwipe={() => setModal(null)}
      />
      {modal === 'date' && (
        <div className="fixed inset-0 z-50 bg-black/60">
          <div className="absolute bottom-0 left-0 right-0">
            <ChooseDates
              onDateNextClick={() => setModal('time')}
              onDateClose={() => setModal(null)}
            />
          </div>
        </div>
      )}

      {modal === 'time' && (
        <div className="fixed inset-0 z-50 bg-black/60">
          <div className="absolute bottom-0 left-0 right-0">
            <ChooseTime
              onTimeNextClick={() => setModal('review')}
              onTimeClose={() => setModal(null)}
              onTimeArrow={() => setModal('date')}
            />
          </div>
        </div>
      )}

      {modal === 'review' && (
        <div className="fixed inset-0 z-50 bg-black/60">
          <div className="absolute bottom-0 left-0 right-0">
            <Review
              onBookFreeNow={() => setModal('success')}
              onReviewClose={() => setModal(null)}
              onReviewArrow={() => setModal('time')}
            />
          </div>
        </div>
      )}

 {modal === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <SuccessState onDone={() => setModal(null)} />
        </div>
      )}
    </div>
  );
}

export default RoomDetails;
