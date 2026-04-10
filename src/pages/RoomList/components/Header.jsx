import Notifications from '../../features/notifications/Notifications';
function Header({ userName }) {
  return (
    <div className="header">
      <div className="greeting">
        <p>Hey, {userName}</p>
        <p>Your workspace is ready to book</p>
      </div>
      <Notifications />
    </div>
  );
}

export default Header;
