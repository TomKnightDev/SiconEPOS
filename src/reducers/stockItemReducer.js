import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  ADD_TO_BASKET_VIA_BARCODE,
  CLEAR_BASKET,
  UPDATE_BASKET_ITEM_PRICE,
  GET_STOCK_ITEM_IMAGE,
  GET_PRODUCT_GROUPS,
} from '../actions/types';

const initialState = {
  basketItems: [],
  basketItemID: 0,
  basketTotal: 0.0,
  stockItemImage: {},
  stockItems: [],
};

const stockItemReducer = (state = initialState, action) => {
  let newTotal = 0.0;
  let newBasketItems = [];

  switch (action.type) {
    case ADD_TO_BASKET:
      newBasketItems = state.basketItems.slice();

      //Check if item exists in basket
      let exists = false;

      newBasketItems.forEach((item) => {
        if (item.Code == action.stockItem.Code) {
          exists = true;
          item.Quantity += 1;
          item.Price = parseFloat(action.stockItem.Price * item.Quantity);
        }
      });

      if (exists == false) {
        newBasketItems.unshift({
          ID: state.baskItemID,
          Code: action.stockItem.Code,
          Price: action.stockItem.Price,
          Quantity: 1,
        });
      }

      newTotal = state.basketTotal + parseFloat(action.stockItem.Price);
      let newBasketItemID = state.baskItemID + 1;
      return {
        ...state,
        basketItems: newBasketItems,
        basketTotal: newTotal,
        basketItemID: newBasketItemID,
      };
    case REMOVE_FROM_BASKET:
      console.log(action.baskItem);
      newBasketItems = state.basketItems
        .slice()
        .filter((item) => item !== action.basketItem);
      newTotal = state.basketTotal - parseFloat(action.basketItem.Price);
      return {...state, basketItems: newBasketItems, basketTotal: newTotal};
    case ADD_TO_BASKET_VIA_BARCODE:
      return {...state};
    case CLEAR_BASKET:
      return {...state, basketItems: newBasketItems, basketTotal: newTotal};
    case UPDATE_BASKET_ITEM_PRICE:
      newBasketItems = state.basketItems.slice();

      for (let i = 0; i < newBasketItems.length; i++) {
        if (newBasketItems[i].Code == action.code) {
          newBasketItems[i].Price = Number(action.payload * newBasketItems[i].Quantity);
        }
        newTotal += newBasketItems[i].Price;
      }
      return {
        ...state,
        basketItems: newBasketItems,
        basketTotal: newTotal,
        basketItemID: newBasketItemID,
      };
    case GET_STOCK_ITEM_IMAGE:
      return state;
    case GET_PRODUCT_GROUPS:
      //action.payload is productGroups
      console.log(action.payload);
      var items = action.payload.flatMap((a) => a.Items);
      console.log(items);
      return {...state, stockItems: items};
    default:
      return state;
  }
};

export default stockItemReducer;
