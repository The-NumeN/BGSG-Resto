import React from "react";
import Card from "../../Components/Card";
import './index.css';

import blueImage from '../../Assets/cu2.png';
import blackImage from '../../Assets/cu3.png';
import Image3 from '../../Assets/cu4.png';
import Image4 from '../../Assets/fi1.png';
import Image5 from '../../Assets/fi2.png';
import Image6 from '../../Assets/fi3.png';
import Image1 from '../../Assets/c1.png';
import Image2 from '../../Assets/c3.png';
import Image7 from '../../Assets/c4.png';
import Image8 from '../../Assets/c6.png';
import Image9 from '../../Assets/c7.png';
import Image10 from '../../Assets/cu5.png';
import BackgroundImage from "../../Components/BackImage";
import bg from "../../Assets/bg.jpg"

export default function Menu() {
  const products = [
    { img: blueImage, title: 'Thiep', description: "Plat de riz avec des légumes frais", price: 10 },
    { img: blackImage, title: 'Crevettes', description: "Crevettes fraichement préparées", price: 15 },
    { img: Image3, title: 'Poulet', description: "Poulet avec sa sauce spéciale", price: 12 },
    { img: Image4, title: 'Crustacés', description: "Ensemble de moules,coquillages...", price: 23 },
    { img: Image1, title: 'Chicken', description: "Sauce végétarienne", price: 18 },
    { img: Image2, title: 'Kebab', description: "Pour les plus gourmand", price: 23 },
    { img: Image7, title: 'Nuggets', description: "Croustillant", price: 8 },
    { img: Image8, title: 'Pilons', description: "Plateau avec la sauce du chef", price: 12 },
    { img: Image9, title: 'Grillade', description: "Accompagné d'une salade et de patates", price: 17 },
    { img: Image10, title: 'Soupe', description: "Bouillon de poulet avec la sauce épicée", price: 5 },
    { img: Image5, title: 'Poisson', description: "Dorade", price: 9 },
    { img: Image6, title: 'Poissonnet', description: "Thon", price: 11 },
  ];

  const addToCart = (product) => {
    localStorage.setItem(product.title, product.price);
  };

  return (
    <div>
    <div>
    <BackgroundImage imageUrl={bg}/>
    </div>
    <div>
    <h2 id="titre">Notre Menu</h2>
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