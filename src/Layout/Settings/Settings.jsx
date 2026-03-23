export default function Settings() {
  return (
    <div id="sec-settings" className="section active">
      <div className="section-title">Innstillinger</div>
      <div className="section-sub">
        Gymkonfigurasjon og tilgangstyring
      </div>
      <div className="grid-2">
        <div className="panel">
          <div className="panel-title">Gyminnstillinger</div>
          <div className="form-group">
            <label htmlFor="set-gymname">Gym-Name</label>
            <input type="text" id="set-gymname" />
          </div>
          <div className="form-group">
            <label htmlFor="set-address">Adresse</label>
            <input type="text" id="set-address" />
          </div>
          <div className="form-group">
            <label htmlFor="set-monthly">Måndespris (NOK)</label>
            <input type="number" id="set-monthly" />
          </div>
          <div className="form-group">
            <label htmlFor="set-quarterly">Kvartalpris (NOK)</label>
            <input type="number" id="set-quarterly" />
          </div>
          <div className="form-group">
            <label htmlFor="set-annual">Årpris (NOK)</label>
            <input type="number" id="set-annual" />
          </div>
          <button className="btn btn-gold">
            Lagre innstillinger
          </button>
        </div>
        <div>
          <div className="panel">
            <div className="panel-title">
              Systembruker (innlogging)
            </div>
            <div id="users-list"></div>
            <hr />
            <div></div>
            <div className="inline-form">
              <div className="form-group">
                <label htmlFor="new-user">Brukernavn</label>
                <input type="text" id="new-user" />
              </div>
              <div className="form-group">
                <label htmlFor="new-pass">Passord</label>
                <input type="pasword" id="new-pass" />
              </div>
            </div>
            <div className="inline-form">
              <div className="form-group">
                <label>Rolle</label>
                <select name="" id="new-role">
                  <option value="Admin">Admin</option>
                  <option value="staff">Ansatt</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="">Koble til Ansatt (Valgfritt)</label>
                <select name="" id="new-user-staffid">
                  <option value="">-- Ingen Koblin --</option>
                </select>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-title">AnsattOversikt</div>
            <div id="settings-staff-list"></div>
            <div>
              <button className="btn btn-steel btn-sm">
                gå til Fulle Personalregister
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
