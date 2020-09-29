import {GET_CUSTOMER_ACCOUNTS, CUSTOMER_SELECTED} from '../actions/types';

const initialState = {
  customerAccounts: [],
  selectedAccount: {
    "Id": 1058,
    "Reference": "CASH01",
    "Name": "CASH SALE ACCOUNT",
    "AccountIsOnHold": false,
  },
};

const salesLedgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_ACCOUNTS:
      return Object.assign({}, state, {customerAccounts: action.payload});
    case CUSTOMER_SELECTED:
        let sa = state.selectedAccount;

        for (let i = 0; i < state.customerAccounts.length; i++) {
            if (state.customerAccounts[i].Id == action.payload) {
                sa = state.customerAccounts[i];
                break;
            }            
        }
        return {...state, selectedAccount: sa};
    default:
      return state;
  }
};

export default salesLedgerReducer;