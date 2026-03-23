export default function Sell() {
  return (
    <div className="section">
      <div className="section-title">Salg</div>
      <div className="section-sub">Register produktsalg</div>
      <div className="grid-2">
        <div className="panel">
          <div className="panel-title">Nytt salg</div>
          <div className="form-group">
            <label htmlFor="salg-product">Velg produkt</label>
            <select
              name="salge-product"
              id="salg-product"
              className="sell-product-input"
            ></select>
          </div>
          <div className="form-group">
            <label htmlFor="salg-qty">Antall</label>
            <input
              type="number"
              id="salg-qty"
              value="1"
              min="1"
              className="sell-qty-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="salge-buyer">Kjøper (Valgfritt)</label>
            <input
              type="text"
              id="salge-buyer"
              placeholder="Navn eller Medlem-ID"
              className="sell-name-input"
            />
          </div>
          <div className="sell-sum-box">
            <div id="sale-total" className="sell-nok">
              NOK 0
            </div>
            <div className="sell-total">Total</div>
          </div>
          <button className="btn btn-gold">Registere Salg</button>
        </div>
      </div>
      <div className="pnale">
        <div className="panel-title">Salgoversikt</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Dato</th>
                <th>Produkt</th>
                <th>Ant.</th>
                <th>Beløp</th>
                <th>Kjøper</th>
              </tr>
            </thead>
            <tbody id="salge-table"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
