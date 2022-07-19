import './Card.scss';
import React from 'react';
import initialKiaListCars from '../../utils/initialKiaListCars';
import defaultImage from '../../images/default_image.jpg'

export default function Card() {
  const initialCard = initialKiaListCars.list[3].feedData;
  return (
      <aside className="card" style={{maxWidth: '20.2rem'}} >
        <h5 className="card-title mb-2">
          {`${initialCard.brandName} ${initialCard.modelName} ${initialCard.equipmentVariantName}`}
          <span className="badge badge-secondary">{initialCard.modelYear}</span>
        </h5>
        <h6 className="card-subtitle mb-3 text-muted">{initialCard.vin}</h6>
        <img className="card-img-top" src={defaultImage} alt="Card image cap"></img>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </aside>
  );
} 