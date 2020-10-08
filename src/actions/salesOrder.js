import {CREATE_SALES_ORDER} from './types';
import axios from 'axios'

export const createSalesOrder = (account, items) => {
    return (dispatch, getState) => {
      

         dispatch({type: CREATE_SALES_ORDER, account: account, items: items});
    };
};