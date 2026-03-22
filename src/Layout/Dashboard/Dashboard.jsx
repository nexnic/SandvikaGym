export default function Dashboard() {
  return (
    <div id="sec-dashboard" className="section">
      <div className="section-title">Dashboard</div>
      <div className="section-sub">Oversikt - Sandvika Gym</div>
      <div className="stats-grid" id="dash-stats"></div>
      <div className="grid-2">
        <div className="panel">
          <div className="panel-title">Forfall / Ikke betalt</div>
          <div id="dash-due" className="table-wrap"></div>
        </div>
        <div className="panel">
          <div className="panel-title">Siste transaksjoner</div>
          <div id="dash-transactions"></div>
        </div>
        <div className="panel">
          <div className="panel-title">
            {' '}
            Inntekt vs Utgift - siste 6 månder (NOK)
          </div>
          <div className="chart-bar-wrap" id="dash-chart"></div>
          <div>
            <span>Inntekter</span>
            <span>Utgifter</span>
          </div>
        </div>
      </div>
    </div>
  );
}
