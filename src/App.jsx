// Import CSS for styling
import './index.css';
import Header from './Layout/Header/Header';
import Navigator from './Layout/Navigator.jsx/Navigator';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
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
