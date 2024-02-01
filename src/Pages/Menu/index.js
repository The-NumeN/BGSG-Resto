import React from "react";
import Card from "../../Components/Card";
import './index.css';

import blueImage from '../../Assets/blue.png';
import blackImage from '../../Assets/black.png';
import pink from '../../Assets/pink.png'

export const Menu = () => {
  return (
    <div className="Menu">
      <Card img={blueImage} title="Test" description="la bouffe n'est pas bonne" price="20"/>
      <Card img={blackImage} title="Test" description="la bouffe n'est pas bonne" price="20"/>
      <Card img={pink} title="Test" description="la bouffe n'est pas bonne" price="20"/>
      <Card img={blackImage} title="Test" description="la bouffe n'est pas bonne" price="20"/>
      <Card img={blueImage} title="Test" description="la bouffe n'est pas bonne" price="20"/>
      <Card img={pink} title="Test" description="la bouffe n'est pas bonne" price="20"/>
    </div>
  );
}
