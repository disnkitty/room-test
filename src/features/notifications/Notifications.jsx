import IconBell from '../../ui/IconBell';

function Notifications() {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white"
    >
      <IconBell className="shrink-0" />
    </button>
  );
}

export default Notifications;
