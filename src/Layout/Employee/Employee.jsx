export default function Employee() {
  return (
    <div id="sec-staff" className="section active">
      <div className="section-title"> Ansatt</div>
      <div className="section-sub">
        Personalregister, stillinger og vaktplan
      </div>

      <div className="staff-nav">
        <button className="staff-tab active">Personregister</button>
        <button className="staff-tab active">Vaktplan</button>
        <button className="staff-tab active">PT-kunder</button>
      </div>

      <div id="staff-list-tab" className="staff-tab-content">
        <div className="actions-row">
          <button className="btn btn-gold">Ny ansatt</button>
        </div>
        <div className="stats-grid" id="staff-stat"></div>
        <div className="panel">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Navn</th>
                  <th>Stilling</th>
                  <th>Telefon</th>
                  <th>E-post</th>
                  <th>Ansatt fra</th>
                  <th>Status</th>
                  <th>Handlinger</th>
                </tr>
              </thead>
              <tbody id="staff-table"></tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="staff-schedule-tab" className="staff-tab-content">
        <div className="actions-row">
          <button className="btn btn-gold">Ny Vakt</button>
          <button className="btn btn-steel btn-sm">
            Forrige uke
          </button>
          <button className="btn btn-steel btn-sm">Neste uke</button>
          <button className="btn btn-outline btn-sm">I dag</button>
        </div>
        <div id="schedule-grid"></div>
      </div>

      <div id="staff-pt-tab" className="staff-tab-content">
        <div className="actions-row">
          <button className="btn btn-gold">Register PT-Time</button>
        </div>
        <div className="grid-2">
          <div className="panel">
            <div className="Panel-title">PT-oversikt per trener</div>
            <div id="pt-oversikt"></div>
          </div>
          <div className="panel">
            <div className="panel-title">PT-timer (logg)</div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Dato</th>
                    <th>PT</th>
                    <th>Kunde</th>
                    <th>Type</th>
                    <th>Varighet</th>
                    <th>Notater</th>
                  </tr>
                </thead>
                <tbody id="pt-sessions-table"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
