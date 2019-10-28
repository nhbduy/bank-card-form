import React, { useContext } from 'react';

import moment from 'moment';
import InputMask from 'react-input-mask';

import { AppStoreContext } from '../context';
import CONSTANT from '../constant';

const getMonthList = () =>
  Array.apply(0, Array(12)).map((item, index) => {
    const value = Number(index + 1);
    return value < 10 ? `0${value}` : `${value}`;
  });

const getYearList = () => {
  const beginYear = moment().subtract(5, 'year');
  const endYear = moment().add(9, 'year');

  const yearRange = endYear.diff(beginYear, 'years') + 1;

  return Array.apply(0, Array(yearRange)).map((item, index) => {
    const firstYear = beginYear;
    const nextYear = beginYear.add(1, 'year');

    return index === 0
      ? {
          short: firstYear.format(CONSTANT.TIME_YEAR_FORMAT_01),
          full: firstYear.format(CONSTANT.TIME_YEAR_FORMAT_02)
        }
      : {
          short: nextYear.format(CONSTANT.TIME_YEAR_FORMAT_01),
          full: nextYear.format(CONSTANT.TIME_YEAR_FORMAT_02)
        };
  });
};

function Form() {
  const {
    cardType,
    // cardNumberMask,
    // cardNumber,
    // cardName,
    cardMonth,
    cardYear,
    // cardCvv,
    onChangeCardType,
    onChangeCardNumber,
    onChangeCardName,
    onChangeCardMonth,
    onChangeCardYear,
    onChangeCardCvv,
    onChangeIsCardFlipped
  } = useContext(AppStoreContext);

  const months = getMonthList();
  const years = getYearList();

  function handleChangeCardNumber(event) {
    onChangeCardType(event);
    onChangeCardNumber(event);
  }

  return (
    <div className='card-form__inner'>
      <div className='card-input'>
        <label htmlFor='cardNumber' className='card-input__label'>
          Card Number
        </label>
        <InputMask
          id='cardNumber'
          className='card-input__input'
          autoComplete='off'
          mask={
            cardType === 'amex' ? '9999 99999 99999' : '9999 9999 9999 9999'
          }
          alwaysShowMask
          onChange={handleChangeCardNumber}
        />
      </div>
      <div className='card-input'>
        <label htmlFor='cardName' className='card-input__label'>
          Card Holders
        </label>
        <input
          type='text'
          id='cardName'
          className='card-input__input'
          data-ref='cardName'
          autoComplete='off'
          maxLength={25}
          onChange={onChangeCardName}
        />
      </div>
      <div className='card-form__row'>
        <div className='card-form__col'>
          <div className='card-form__group'>
            <label htmlFor='cardMonth' className='card-input__label'>
              Expiration Date
            </label>
            <select
              className='card-input__input -select'
              id='cardMonth'
              data-ref='cardDate'
              value={cardMonth}
              onChange={onChangeCardMonth}>
              <option value='MM'>Month</option>
              {months.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <select
              className='card-input__input -select'
              id='cardYear'
              data-ref='cardDate'
              value={cardYear}
              onChange={onChangeCardYear}>
              <option value='YY'>Year</option>
              {years.map(item => (
                <option key={item.full} value={item.short}>
                  {item.full}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='card-form__col -cvv'>
          <div className='card-input'>
            <label htmlFor='cardCvv' className='card-input__label'>
              CVV
            </label>
            <InputMask
              id='cardCvv'
              className='card-input__input'
              autoComplete='off'
              mask='999'
              alwaysShowMask
              onChange={onChangeCardCvv}
              onFocus={() => onChangeIsCardFlipped(true)}
              onBlur={() => onChangeIsCardFlipped(false)}
            />
          </div>
        </div>
      </div>
      <button className='card-form__button'>Submit</button>
    </div>
  );
}

export default Form;
