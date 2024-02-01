import Button from '../Button';
import './index.css';
import React, { useState } from 'react';

const Card = ({ img, title, description, price }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addToCartHandler = () => {
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
        <p class="des">{description}</p>
        <p class="des">Prix: {price} €</p>
        <Button.Ajout onClick={addToCartHandler}  label="Ajouter au panier"></Button.Ajout>

        {isAddedToCart && (
            <div className="popup">
                <p>Ajouté au panier!</p>
            </div>
        )}
    </div>
  );
};

export default Card;
