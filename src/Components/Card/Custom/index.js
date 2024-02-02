import './index.css';
import Button from '../../Button';
import React, { useState } from 'react';

export const Custom = ({ img, title, description, price, addToCart }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addToCartHandler = () => {
    addToCart({ title, price });
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="product-card">
        <div className="product-image-container">
            <img src={img} alt={title} className="product-image" />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Prix: {price} €</p>
        <Button.Ajout onClick={addToCartHandler}  label="Ajouter au panier"></Button.Ajout>

        {isAddedToCart && (
            <div className="popup">
                <p>Ajouté au panier!</p>
            </div>
        )}
    </div>
  );
};