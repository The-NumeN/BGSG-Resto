import React from "react";
import Card from "../../Components/Card";
import './index.css';

import blueImage from '../../Assets/cu2.png';
import blackImage from '../../Assets/cu3.png';
import Image3 from '../../Assets/cu4.png';
import Image4 from '../../Assets/fi1.png';
import Image5 from '../../Assets/fi2.png';
import Image6 from '../../Assets/fi3.png'
import BackgroundImage from "../../Components/Footer/BackImage";
import bg from "../../Assets/bg.jpg"

export default function Menu() {
  const products = [
    { img: blueImage, title: 'Thiep', description: "Plat de riz avec des légumes frais", price: 20 },
    { img: blackImage, title: 'Crevettes', description: "Crevettes fraichement préparées", price: 30 },
    { img: Image3, title: 'Poulet', description: "Poulet avec sa sauce spéciale", price: 50 },
    { img: Image4, title: 'Crustacés', description: "Ensemble de moules,coquillages...", price: 60 },
    { img: Image5, title: 'Poisson', description: "Dorade", price: 70 },
    { img: Image6, title: 'Poissonnet', description: "Thon", price: 80 },
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
