import {act} from 'react-test-renderer';
import {ADD_TO_BASKET, REMOVE_FROM_BASKET, ADD_TO_BASKET_VIA_BARCODE} from '../actions/types';

const initialState = {
  basketItems: [],
  basketItemID: 0,
  basketTotal: 0.0,
};

const stockItemReducer = (state = initialState, action) => {
  let newTotal = 0;
  let newBasketItems = [];

  switch (action.type) {
    case ADD_TO_BASKET:
      newBasketItems = state.basketItems.slice();
      newBasketItems.unshift({
        ID: state.baskItemID,
        Code: action.stockItem.Code,
        Price: action.stockItem.Price,
      });
      newTotal = state.basketTotal + parseFloat(action.stockItem.Price);
      let newBasketItemID = state.baskItemID + 1;
      return {...state, basketItems: newBasketItems, basketTotal: newTotal, basketItemID: newBasketItemID};
    case REMOVE_FROM_BASKET:
      console.log(action.baskItem);
      newBasketItems = state.basketItems
        .slice()
        .filter((item) => item !== action.basketItem);
      newTotal = state.basketTotal - parseFloat(action.basketItem.Price);
      return {...state, basketItems: newBasketItems, basketTotal: newTotal};
    case ADD_TO_BASKET_VIA_BARCODE:
      return {...state }
    default:
      return state;
  }
};

export default stockItemReducer;
