import Button from '../../ui/Button';
import IconAvailable from '../../ui/IconAvailable';
import IconCross from '../../ui/IconCross';
import IconLike from '../../ui/IconLike';

function DetailRoomCard({ obj }) {
  return (
    <div className="detail-room-card">
      <img src={obj.imageUrl} alt={obj.roomName} className="room-image" />

      <h3 className="like">
        <IconLike />
      </h3>

      <h3 className="room-title">{obj.roomName}</h3>

      <div className="room-badges">
        <div className="badge">
          <Button
            icon={<IconStar />}
            text={`${obj.rating}`}
            color="white"
            size="primary"
          />
        </div>
        <div className="badge">
          <Button
            icon={<IconPeople />}
            text={`${obj.peoples} people`}
            color="white"
            size="primary"
          />
        </div>
        <div className="badge">
          <Button
            icon={obj.status ? <IconAvailable /> : <IconCross />}
            text={obj.status ? 'Available' : 'Unavailable'}
            color="white"
            size="primary"
          />
        </div>
        <div className="price">${obj.price} /hour</div>
        <Button
          text="Book"
          color={obj.isBook ? 'green' : 'gray'}
          size="medium"
        />
      </div>
    </div>
  );
}

export default DetailRoomCard;
