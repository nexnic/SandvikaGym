export default function Product() {
  return (
    <div id="sec-products" className="section">
      <div className="section-title">Produkter</div>
      <div className="section-sub">Varelager og prissetting</div>
      <div className="actions-row">
        <button className="btn btn-hold">Nytt Produkt</button>
      </div>
      <div className="product-grid" id="products-grid"></div>
    </div>
  );
}
