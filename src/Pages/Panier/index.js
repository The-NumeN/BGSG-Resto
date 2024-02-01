import React from "react";
import Shop from "../../Assets/shop.png";
import './index.css'

export default function Panier() {
  const viderPanier = () => {
    localStorage.clear();
    window.location.reload();
  };

  function getTotal() {
    let total = 0;
    Object.keys(localStorage).map(key =>
        total = total + parseFloat(localStorage.getItem(key))
    )

    return total;
  }

  return (
    <div className="panier-container">
      <div className="image-container">
        <img src={Shop} alt="Image" className="image" />
      </div>
      <div className="panier-content">
        <h2>Mon panier</h2>
        {Object.keys(localStorage).map(key => (
          <p key={key}>
            {key} : {localStorage.getItem(key)}€
          </p>
        ))}
        <h4>Total à payer : {getTotal()} € </h4>
        <button onClick={() => viderPanier()}>Vider le panier</button>
      </div>
    </div>
  );
}
