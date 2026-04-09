import UserNotifications from './Buttons/UserNotifications';

function Header({ userName }) {
  return (
    <div className="header">
      <div className="greeting">
        <p>Hey, {userName}</p>
        <p>Your workspace is ready to book</p>
      </div>

      <UserNotifications />
    </div>
  );
}

export default Header;
