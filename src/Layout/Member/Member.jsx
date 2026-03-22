export default function Member() {
  return (
    <div id="sec-members" className="section">
      <div className="section-title">Medlemmer</div>
      <div className="section-sub">
        Registrer og administrer alle medlemmer
      </div>
      <div className="actions-row">
        <button className="btn btn-gold">Nytt Medlem</button>
        <button className="btn btn-outline btn-sm">
          {' '}
          Eksporter CSV
        </button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          id="member-seach"
          placeholder="Søk navn, e-post, id..."
        />
        <select className="bare-select" id="member-filter">
          <option value="all">ALLE</option>
          <option value="paid">BETALT</option>
          <option value="unpaid">IKKE BETALT</option>
          <option value="active">AKTIV</option>
          <option value="inactive">INAKTIV</option>
        </select>
      </div>
      <div className="panel">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Navn</th>
                <th>E-post</th>
                <th>Telefon</th>
                <th>Type</th>
                <th>Betalt til</th>
                <th>Status</th>
                <th>Betaling</th>
                <th>Handliner</th>
              </tr>
            </thead>
            <tbody id="members-table"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
