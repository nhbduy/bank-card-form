import React, { useReducer } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

import { AppStoreContext } from './context';
import ACTIONS from './actions';
import CONSTANT from './constant';
import reducers from './reducers';

const defaultKeyData = {
  cardType: 'cardType',
  cardNumberMask: 'cardNumberMask',
  cardNumber: 'cardNumber',
  cardName: 'cardName',
  cardMonth: 'cardMonth',
  cardYear: 'cardYear',
  cardCvvMask: 'cardCvvMask',
  cardCvv: 'cardCvv',
  isCardFlipped: 'isCardFlipped'
};

const initialState = {
  // cardBackground: Math.floor(Math.random() * 25 + 1),
  [defaultKeyData.cardType]: 'brand',
  [defaultKeyData.cardNumberMask]: CONSTANT.OTHER_CARD_MASK,
  [defaultKeyData.cardNumber]: '',
  [defaultKeyData.cardName]: 'full name',
  [defaultKeyData.cardMonth]: 'MM',
  [defaultKeyData.cardYear]: 'YY',
  [defaultKeyData.cardCvvMask]: '###',
  [defaultKeyData.cardCvv]: '',
  // minCardYear: new Date().getFullYear()
  [defaultKeyData.isCardFlipped]: false
  // focusElementStyle: null,
  // isInputFocused: false
};

function App() {
  const [state, dispatch] = useReducer(reducers, initialState);

  // const { cardNumber } = state;

  const appAPI = {
    ...state,
    onChangeCardType: event =>
      dispatch({
        type: ACTIONS.UPDATE_CARD_TYPE,
        data: event.target.value,
        initialState
      }),
    onChangeCardNumber: event =>
      dispatch({
        type: ACTIONS.UPDATE_NUMBER_WITH_MASK,
        data: {
          value: event.target.value,
          maskKey: defaultKeyData.cardNumberMask,
          numberKey: defaultKeyData.cardNumber
        },
        initialState
      }),
    onChangeCardName: event =>
      dispatch({
        type: ACTIONS.UPDATE_STATE,
        data: {
          value: event.target.value,
          key: defaultKeyData.cardName
        },
        initialState
      }),
    onChangeCardMonth: event =>
      dispatch({
        type: ACTIONS.UPDATE_NUMBER_SELECT,
        data: {
          value: event.target.value,
          numberKey: defaultKeyData.cardMonth
        },
        initialState
      }),
    onChangeCardYear: event =>
      dispatch({
        type: ACTIONS.UPDATE_NUMBER_SELECT,
        data: { value: event.target.value, numberKey: defaultKeyData.cardYear },
        initialState
      }),
    onChangeCardCvv: event =>
      dispatch({
        type: ACTIONS.UPDATE_NUMBER_WITH_MASK,
        data: {
          value: event.target.value,
          maskKey: defaultKeyData.cardCvvMask,
          numberKey: defaultKeyData.cardCvv
        },
        initialState
      }),
    onChangeIsCardFlipped: value =>
      dispatch({
        type: ACTIONS.UPDATE_STATE,
        data: {
          value,
          key: defaultKeyData.isCardFlipped
        },
        initialState
      })
  };

  return (
    <AppStoreContext.Provider value={appAPI}>
      <div id='app' className='wrapper'>
        <div className='card-form'>
          <Card />
          <Form />
        </div>
      </div>
    </AppStoreContext.Provider>
  );
}

export default App;
