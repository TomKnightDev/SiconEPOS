import axios from 'axios';

import {CREATE_SALES_ORDER} from '../actions/types';

const initialState = {
  salesOrders: [],
};

const salesOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SALES_ORDER:
     

      return state;
    default:
      return state;
  }
};

export default salesOrderReducer;
