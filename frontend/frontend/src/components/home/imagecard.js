
import React from 'react';
import './imagecard.css';
const ImageCard = ({ imageSrc, title, description }) => {
  return (
    <div className="image-card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ImageCard;
