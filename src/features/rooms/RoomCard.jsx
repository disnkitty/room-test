import Button from '../../ui/Button';
import IconPeople from '../../ui/IconPeople';
import IconStar from '../../ui/IconStar';


function RoomCard({ obj }) {
  return (
    <div className="room-card">
      <img src={obj.imageUrl} alt={obj.roomName} className="room-image" />

      <div className="room-overlay"></div>
      <div className="room-title">{obj.roomName} </div>

      <div className="room-badges">
        <div className="badge">
        <Button icon={<IconPeople />} text ={`${obj.peoples} people`} color='white' size='primary'/>

        </div>
        <div className="badge">
        <Button icon={<IconStar />} text ={`${obj.rating}`} color='white' size='primary'/>
      
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
