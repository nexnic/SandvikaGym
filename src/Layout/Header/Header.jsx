export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        Sandvik Gym <span>Admin System</span>
      </div>
      <div className="header-user">
        <div className="user-bagge">
          {' '}
          Innlogget som <strong id="logged-in-name">Admin</strong>
        </div>
        <button classname="btn btn-outline btn-sm">Logg ut</button>
      </div>
    </div>
  );
}
