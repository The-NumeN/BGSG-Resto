import React from 'react';
import './index.css';

const BackgroundImage = ({ imageUrl }) => {
  return (
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}>
    </div>
  );
};

export default BackgroundImage;
