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
import blackImage from '../../Assets/cu3.png';
import Image30 from '../../Assets/cu4.png';

 const Home = () => {
    const products = [

      { img: blackImage, title: 'Crevettes', description: "Crevettes fraichement préparées", price: 30 },
      { img: Image30, title: 'Poulet', description: "Poulet avec sa sauce spéciale", price: 50 },
      { img: Image4, title: 'Crustacés', description: "Ensemble de moules,coquillages...", price: 60 },
    
    ];
  return (
    <div>
<div className="all">
  <div className="left">
    <h2>Bienvenue chez BGSG</h2>
    <p>Bienvenue chez BGSG Chicken, le Fast-Food qui va réveiller vos papilles avec une explosion de saveurs de poulet ! Chez nous, c'est tout un festin de tendresse et de croustillant qui vous attend.
       BGSG Chicken, c'est l'endroit où les sandwichs au poulet rivalisent avec des tenders croustillants, des frites dorées et des saveurs qui vous feront saliver. Fraîcheur et délices sont notre credo.
<br></br>       
On vous promet des repas rapides, délicieux et sans chichi. Que vous soyez accro aux classiques ou prêt à tenter des créations inédites, BGSG Chicken a de quoi combler toutes vos envies.
Alors, installez-vous confortablement, commandez votre festin de poulet, et laissez-vous emporter par le plaisir simple et authentique de BGSG Chicken. Bon appétit !</p>
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
      <Card.Simple
        
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
