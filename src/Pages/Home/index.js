import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import image1 from "../../Assets/c7.png";
import image2 from "../../Assets/c2.png";
import image3 from "../../Assets/cu1.png";
import image4 from "../../Assets/c4.png";
import Card from "../../Components/Card";

import blueImage from '../../Assets/cu2.png';
import blackImage from '../../Assets/black.png';

 const Home = () => {
  const products = [
    { img: blueImage, title: 'Test', description: "la bouffe n'est pas bonne", price: 20 },
    { img: blackImage, title: 'Test2', description: "la bouffe n'est pas bonne", price: 30 },
    { img: blueImage, title: 'Test3', description: "la bouffe n'est pas bonne", price: 60 },
  ];
  return (
    
<div className="all">
  <div className="left">
    <h1><bold>Bienvenue chez BGSG</bold></h1>
    <p>
Bienvenue chez BGSG, le Fast-Food qui va réveiller vos papilles ! Chez nous, on mise sur des burgers qui déchirent, des frites croustillantes, des hot-dogs qui font saliver et des milkshakes à tomber. Fraîcheur et saveurs sont nos mots d'ordre.

BGSG, c'est la promesse de repas rapides, délicieux et sans chichi. Que vous soyez fan des classiques ou prêt à découvrir des combos inédits, on a de quoi satisfaire toutes les envies.

Alors, installez-vous, commandez, et laissez-vous emporter par le plaisir simple et authentique de BGSG. Bon appétit !
    <h2>Vous avez faim?</h2>
    Chez BGSG, nos spécialités sont conçues pour vous offrir une expérience gustative inoubliable. Découvrez nos incontournables :

Le BGSG Deluxe Burger : Un chef-d'œuvre entre deux pains, avec un steak juteux, du fromage fondant, des légumes frais et notre sauce secrète. Un classique revisité qui saura conquérir votre palais.

Les Frites Gourmandes : Croustillantes à l'extérieur, moelleuses à l'intérieur, nos frites sont le compagnon idéal de chaque repas. À déguster seules ou en accompagnement, elles sont simplement irrésistibles.

Le Hot-Dog Festif : Un hot-dog repensé avec des garnitures audacieuses. Saucisse savoureuse, pain moelleux et une variété de toppings créatifs pour une explosion de saveurs à chaque bouchée.

Les Milkshakes Gourmets : Plongez dans l'onctuosité de nos milkshakes. Des combinaisons uniques de saveurs, du classique vanille au chocolat indulgent, préparés avec une générosité délicieuse.

Les Salades Fraîcheur : Pour ceux qui optent pour une option plus légère, nos salades fraîches et colorées sont un festival de légumes croquants, de protéines savoureuses et de vinaigrettes originales.

Chez BGSG, chaque spécialité est élaborée avec soin et passion pour vous offrir un festin de saveurs. Laissez-vous tenter par nos créations uniques qui vont révolutionner votre conception du Fast-Food. Bon appétit !




</p>
  </div>
    <div className="right">
        <br />
        <br />
        <br />
        <Carousel id="test">
          <Carousel.Item>
            <img
              className="image1"
              src={image1}
              height="50%"
              width="50%"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Here you can see the first slide</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image2"
              src={image2}
              height="50%"
              width="50%"
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>Here you can see the second slide</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="image3"
              src={image3}
              height="50%"
              width="50%"
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>Here you can see the third slide</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image4"
              src={image4}
              height="50%"
              width="50%"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <p>Here you can see the third slide</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel><br/><br/><br></br>
        
       
      
    </div>
      
    <div className="end">
    <h2 id="spe">Nos Spécialités</h2>
    {products.map((product) => (
      <Card.Simcard
        
        img={product.img}
        title={product.title}
        description={product.description}
        price={product.price}
       
      />
    ))}
    </div>
</div>
     
  );
};
export default Home;
