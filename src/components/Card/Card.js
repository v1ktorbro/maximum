import './Card.scss';
import React from 'react';
import initialKiaListCars from '../../utils/initialKiaListCars';
import defaultImage from '../../images/default_image.jpg'

export default function Card() {
  const initialCard = initialKiaListCars.list[13].feedData;
  // console.log(initialCard.baseOptions[0].);
  return (
      <aside className="card" style={{maxWidth: '20.2rem'}} >
        <h5 className="card-title mb-2">
          {`${initialCard.brandName} ${initialCard.modelName} ${initialCard.equipmentVariantName}`}
          <span className="badge badge-secondary">{initialCard.modelYear}</span>
        </h5>
        <h6 className="card-subtitle mb-3 text-muted">{initialCard.vin}</h6>
        <img className="card-img-top" src={defaultImage} alt="Card image cap"></img>
        <div className="card-body">

          <ul className='card__list-of-characteristics'>

            <li className='card__name-item-list card__name-item-list_engine'>
              <h6 className="card-subtitle mt-1 text-muted">Двигатель</h6>
              <p className='card__value-of-characteristic'>
                {`${initialCard.engine.engineCapacity} л`}
                <span className='card__symbol-green-slash'>&nbsp;/&nbsp;</span>
                {`${initialCard.engine.enginePower} лc`} 
                <span className='card__symbol-green-slash'>&nbsp;/&nbsp;</span>
                {initialCard.equipmentVariantFuelType.toLowerCase()}
              </p>
            </li>

            <li className='card__name-item-list card__name-item-list_auto-probeg'>
              <h6 className="card-subtitle mt-1 text-muted">Пробег</h6>
              <p className='card__value-of-characteristic'>
                {`${initialCard.autoProbeg} км`}
              </p>
            </li>

            <li className='card__name-item-list card__name-item-list_transmission'>
              <h6 className="card-subtitle mt-1 text-muted">Кпп</h6>
              <p className='card__value-of-characteristic'>
                {`${initialCard.equipmentVariantTransmissionType}`}
              </p>
            </li>
            
            <li className='card__name-item-list card__name-item-list_color-car'>
              <h6 className="card-subtitle mt-1 text-muted">Цвет</h6>
              <p className='card__value-of-characteristic'>
                {initialCard.colorByClassifierName.replace(/( |^)[а-яёa-z]/g, initialCard.colorByClassifierName[0].toUpperCase())}
              </p>
            </li>

          </ul>

            <div className='card__name-item-list card__name-item-list_options'>
              <h6 className="card-subtitle mt-0 text-muted">Пакеты</h6>
              <div className='card__wrapper-block-options'>
                <p className='card__value-of-characteristic'>
                  {initialCard.baseOptions[0].optionName}
                </p>
                  <button className='card__btn-options-more'>{`(+ ещё ${initialCard.baseOptions.length - 1}) пакета`}</button>
              </div>
            </div>

        </div>
      </aside>
  );
} 