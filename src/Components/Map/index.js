import React from 'react';
import './index.css';

const Map = () => {
  return (
    <div className='map-container'>
          <h2>Contactez-nous</h2>
      <p>Address: 25 Rue Claude Tillier, 75012 Paris <br/>Mail: contact@ecole-ipssi.com <br/>Tel: 01 55 43 26 65</p>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10502.014499773615!2d2.388247!3d48.8486061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720ccc2ca7b1%3A0x45528eb90c108f61!2sIPSSI%20Paris!5e0!3m2!1sfr!2sfr!4v1678245541292!5m2!1sfr!2sfr"
        width="50%"
        height="350px"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
