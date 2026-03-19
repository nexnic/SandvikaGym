function App() {
  return (
    <div className="App">
      <div className="login-screen">
        <div className="login-box">
          <div className="login-logo">
            <h1>
              <span className="gym-name">Sandvika Gym</span>
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
            <lable>Brukernavn</lable>
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
          <button className="login-button">Logg inn</button>
        </div>
      </div>
    </div>
  );
}

export default App;
