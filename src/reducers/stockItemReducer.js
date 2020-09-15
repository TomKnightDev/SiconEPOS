import {ADD_TO_BASKET} from '../actions/types';

const initialState = {
  basketItems: [],
};

const stockItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      let bi = state.basketItems;
      bi.push(action.stockItem);
      console.log(bi);
      return {...state, basketItems: bi};
    default:
      return state;
  }
};

export default stockItemReducer;
