import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppStoreContext } from '../context';

const imageUrls = {
  background:
    'https://raw.githubusercontent.com/nhbduy/public-images/master/B/background-7.jpeg',
  chip:
    'https://raw.githubusercontent.com/nhbduy/public-images/master/C/chip.png',
  amex:
    'https://raw.githubusercontent.com/nhbduy/public-images/master/A/amex.png',
  discover:
    'https://raw.githubusercontent.com/nhbduy/public-images/master/D/discover.png',
  mastercard:
    'https://raw.githubusercontent.com/nhbduy/public-images/master/M/mastercard.png',
  visa:
    'https://raw.githubusercontent.com/nhbduy/public-images/master/V/visa.png'
};

function Card() {
  const {
    cardType,
    cardNumberMask,
    cardName,
    cardMonth,
    cardYear,
    cardCvvMask
  } = useContext(AppStoreContext);

  const renderCardNumber = () => {
    return (
      <React.Fragment>
        {cardNumberMask.split('').map((item, index) => (
          <span key={`${item}-${index}`}>
            <div className='card-item__numberItem slide-fade-up'>{item}</div>
          </span>
        ))}
      </React.Fragment>
    );
  };

  return (
    <div className='card-list'>
      <div className='card-item'>
        <div className='card-item__side -front'>
          <div className='card-item__focus' />
          <div className='card-item__cover'>
            <img
              className='card-item__bg'
              src={imageUrls.background}
              alt='Bank Card Background Front'
            />
          </div>
          <div className='card-item__wrapper'>
            <div className='card-item__top'>
              <img
                className='card-item__chip'
                src={imageUrls.chip}
                alt='Bank Card Chip'
              />
              {cardType !== 'brand' && (
                <div className='card-item__type slide-fade-up'>
                  <img
                    className='card-item__typeImg slide-fade-up'
                    src={imageUrls[cardType]}
                    alt='Bank Card Brand Front'
                  />
                </div>
              )}
            </div>
            <label htmlFor='cardNumber' className='card-item__number'>
              {renderCardNumber()}
            </label>
            <div className='card-item__content'>
              <label htmlFor='cardName' className='card-item__info'>
                <div className='card-item__holder'>Card Holder</div>

                <div className='card-item__name slide-fade-up'>
                  <span className='card-item__nameItem slide-fade-right'>
                    {cardName}
                  </span>
                </div>
              </label>
              <div className='card-item__date'>
                <label htmlFor='cardMonth' className='card-item__dateTitle'>
                  Expires
                </label>
                <label htmlFor='cardMonth' className='card-item__dateItem'>
                  {/* <span></span> */}
                  <span className='slide-fade-up'>{cardMonth}</span>
                </label>
                /
                <label htmlFor='cardYear' className='card-item__dateItem'>
                  {/* <span></span> */}
                  <span className='slide-fade-up'>{cardYear}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='card-item__side -back'>
          <div className='card-item__cover'>
            <img
              className='card-item__bg'
              src={imageUrls.background}
              alt='Bank Card Background Back'
            />
          </div>
          <div className='card-item__band' />
          <div className='card-item__cvv'>
            <div className='card-item__cvvTitle'>CVV</div>
            <div className='card-item__cvvBand'></div>
            <div className='card-item__type'>
              <img
                className='card-item__typeImg'
                src={imageUrls[cardType]}
                alt='Bank Card Brand Back'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {};

export default Card;
