import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import image1 from "../../Assets/c7.png";
import image2 from "../../Assets/c2.png";
import image3 from "../../Assets/cu1.png";
import image4 from "../../Assets/c4.png";
import Card from "../../Components/Card";
import Image4 from '../../Assets/fi1.png';
import Image5 from '../../Assets/fi2.png';
import Image6 from '../../Assets/fi3.png'
 const Home = () => {
    const products = [

      
      { img: Image4, title: 'Crustacés', description: "Ensemble de moules,coquillages...", price: 60 },
      { img: Image5, title: 'Poisson', description: "Dorade", price: 70 },
      { img: Image6, title: 'Poissonnet', description: "Thon", price: 80 },
    ];
  return (
    <div>
<div className="all">
  <div className="left">
    <h2>Bienvenue chez BGSG</h2>
    <p>Bienvenue chez BGSG, le Fast-Food qui va réveiller vos papilles ! Chez nous, on mise sur des burgers qui déchirent, des frites croustillantes, des hot-dogs qui font saliver et des milkshakes à tomber. Fraîcheur et saveurs sont nos mots d'ordre.</p>
    <p>BGSG, c'est la promesse de repas rapides, délicieux et sans chichi. Que vous soyez fan des classiques ou prêt à découvrir des combos inédits, on a de quoi satisfaire toutes les envies. Installez-vous, commandez, et laissez-vous emporter par le plaisir simple et authentique de BGSG. Bon appétit !</p>
  </div>
    <div className="right">
        <Carousel id="test">
          <Carousel.Item>
            <img
              className="image1"
              src={image1}
              height="50%"
              width="50%"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image2"
              src={image2}
              height="50%"
              width="50%"
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="image3"
              src={image3}
              height="50%"
              width="50%"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image4"
              src={image4}
              height="50%"
              width="50%"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
    </div>      
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
