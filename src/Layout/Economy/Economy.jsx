export default function Economy() {
  return (
    <div id="sec-economy" className="section active">
      <div className="section-title">Økonomi</div>
      <div className="section-sub">
        Inntekter, utgifter og regnskapsrapport
      </div>
      <div className="stats-grid" id="eco-stats"></div>
      <div className="actions-row">
        <button className="btn btn-gold">Legg til transakjon</button>
        <button className="btn btn-outline btn-sm">
          Eksporter PDF
        </button>
        <button className="btn btn-steel btn-sm">
          Eksporter CVS
        </button>
      </div>
      <div className="grid-2">
        <div className="panel">
          <div className="panel-title">Alle transaksjoner</div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Dato</th>
                  <th>Type</th>
                  <th>Kategori</th>
                  <th>Beskrivelse</th>
                  <th>Beløp</th>
                  <th>Slett</th>
                </tr>
              </thead>
              <tbody id="trasactions-table"></tbody>
            </table>
          </div>
        </div>
        <div className="panel">
          <div className="panel-title">Inntektskategorier</div>
          <div id="eco-breakdown"></div>
        </div>
        <div className="panel">
          <div className="panel-title">
            Månedlig balanse (siste 3 mnd)
          </div>
          <div id="eco-monthly"></div>
        </div>
      </div>
    </div>
  );
}
