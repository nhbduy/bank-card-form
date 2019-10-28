import ACTIONS from './actions';

function getCardType(cardNumber) {
  const amexRegex = new RegExp('^(34|37)');
  const discoverRegex = new RegExp('^6011');
  const mastercardRegex = new RegExp('^5[1-5]');
  const visaRegex = new RegExp('^4');

  let cardType = 'brand';
  if (cardNumber.match(amexRegex)) cardType = 'amex';
  else if (cardNumber.match(discoverRegex)) cardType = 'discover';
  else if (cardNumber.match(mastercardRegex)) cardType = 'mastercard';
  else if (cardNumber.match(visaRegex)) cardType = 'visa';

  return cardType;
}

function getNumberAndMask(mask, value) {
  const maskRes = value.replace(/_/g, '#');

  return {
    maskRes,
    numberRes: value
  };
}

function reducers(state, action) {
  const { type, data, initialState } = action;

  switch (type) {
    case ACTIONS.UPDATE_STATE: {
      const { value, key } = data;

      return {
        ...state,
        [key]: value || initialState[key]
      };
    }

    case ACTIONS.UPDATE_CARD_TYPE: {
      const number = data;

      const cardType = getCardType(number);

      return {
        ...state,
        cardType: cardType || initialState.cardType
      };
    }

    case ACTIONS.UPDATE_NUMBER_WITH_MASK: {
      const { value, maskKey, numberKey } = data;
      const { cardNumberMask } = state;

      const { maskRes, numberRes } = getNumberAndMask(cardNumberMask, value);

      return {
        ...state,
        [maskKey]: maskRes || initialState[maskKey],
        [numberKey]: numberRes || initialState[numberKey]
      };
    }

    case ACTIONS.UPDATE_NUMBER_SELECT: {
      const { value, numberKey } = data;

      return {
        ...state,
        [numberKey]: value
      };
    }

    default:
      return state;
  }
}

export default reducers;
