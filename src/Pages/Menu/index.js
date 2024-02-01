import React from "react";
import Card from "../../Components/Card";
import './index.css';

import blueImage from '../../Assets/cu2.png';
import blackImage from '../../Assets/black.png';
import pink from '../../Assets/pink.png'
import BackgroundImage from "../../Components/Footer/BackImage";
import bg from "../../Assets/bg.jpg"

export default function Menu() {
  const products = [
    { img: blueImage, title: 'Test', description: "la bouffe n'est pas bonne", price: 20 },
    { img: blackImage, title: 'Test2', description: "la bouffe n'est pas bonne", price: 30 },
    { img: blueImage, title: 'Test3', description: "la bouffe n'est pas bonne", price: 50 },
    { img: blueImage, title: 'Test3', description: "la bouffe n'est pas bonne", price: 60 },
    { img: pink, title: 'Test3', description: "la bouffe n'est pas bonne", price: 70 },
    { img: pink, title: 'Test3', description: "la bouffe n'est pas bonne", price: 80 },
  ];

  const addToCart = (product) => {
    localStorage.setItem(product.title, product.price);
  };

  return (
    <div>
    <div>
    <BackgroundImage imageUrl={bg}/>
    </div>
    <div className="Menu">
      {products.map((product, index) => (
        <Card.Cuscard
          key={index}
          img={product.img}
          title={product.title}
          description={product.description}
          price={product.price}
          addToCart={addToCart}
        />
      ))}
     
    </div>
    </div>
  );
}
