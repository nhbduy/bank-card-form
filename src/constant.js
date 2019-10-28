export default {
  TIME_YEAR_FORMAT_01: 'YY',
  TIME_YEAR_FORMAT_02: 'YYYY',

  AMEX_CARD_MASK: '#### ###### #####',
  OTHER_CARD_MASK: '#### #### #### ####',

  // Link: https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
  REGEX_CARD_MASK: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
};
