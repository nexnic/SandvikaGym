// Import CSS for styling
import './index.css';

function App() {
  return (
    <div className="App">
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
      <div className="nav">
        <button className="nav-btn active">Dashboard</button>
        <button className="nav-btn">Medlemmer</button>
        <button className="nav-btn">Økonomi</button>
        <button className="nav-btn">Produkter</button>
        <button className="nav-btn">Salg</button>
        <button className="nav-btn">Ansatte</button>
        <button className="nav-btn">Innstillinger</button>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default App;

/**
 * <div className="login-screen">
        <div className="login-box">
          <div className="login-logo">
            <h1>
              <span className="gym-name">Sandvika Gym</span>
              <br></br>
              <span className="gym-sub">Administrasjonssystem</span>
            </h1>
          </div>
          <div className="barbell-divider">
            // TODO: Add barbell SVG here
            <span></span>
          </div>
          <div className="login-error">
            Feil Brukernavn eller passord
          </div>
          <div className="form-group">
            <label>Brukernavn</label>
            <input
              type="text"
              placeholder="Brukernavn"
              autocomplett="username"
            />
          </div>
          <div className="form-group">
            <label>Passord</label>
            <input
              type="password"
              placeholder="*******"
              autoComplete="current-password"
            />
          </div>
          // TODO: Add functionality to the login button
          <button className="btn btn-gold">Logg inn</button>
        </div>
      </div>
 */
