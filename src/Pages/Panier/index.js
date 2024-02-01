import React from "react";

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
    <div>
       <h2> Mon panier </h2>
            {Object.keys(localStorage).map(key =>

                <p key={key}> {key} : {localStorage.getItem(key)}€ </p>

            )}
      <h3> Total à payer : {getTotal()} € </h3>
      <button onClick={() => viderPanier()}>Vider le panier</button>
    </div>
  );
};