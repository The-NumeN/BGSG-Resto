import React from 'react';
import Map from '../../Components/Map'; 
import Form from '../../Components/Form';
import './index.css'
import BackgroundImage from "../../Components/BackImage";
import bg from "../../Assets/bg.jpg"

const Contact = () => {
  return (
    <div>
    <div>
    <BackgroundImage imageUrl={bg}/>
    </div>
    <div className="contact-page">
      <div className="map-container">
        <Map />
      </div>
      <div className="form-container">
        <Form />
      </div>
    </div>
    </div>
  );
};
export default Contact;
