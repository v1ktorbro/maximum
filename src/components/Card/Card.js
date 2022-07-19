import './Card.scss';
import React from 'react';
import initialKiaListCars from '../../utils/initialKiaListCars';
import defaultImage from '../../images/default_image.jpg'

export default function Card() {
  const initialCard = initialKiaListCars.list[3].feedData;
  return (
      <aside className="card" style={{maxWidth: '20.2rem'}} >
        <h5 className="card-title">{`${initialCard.brandName} ${initialCard.modelName} ${initialCard.equipmentVariantName}`}</h5>
        <img className="card-img-top" src={defaultImage} alt="Card image cap"></img>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </aside>
  );
} 