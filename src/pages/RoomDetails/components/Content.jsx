import FullDetailRoom from '../../../features/rooms/FullDetailRoom';

function Content({ obj }) {
  return (
    <div className="flex flex-col pb-24">
      <FullDetailRoom obj={obj} />
    </div>
  );
}

export default Content;