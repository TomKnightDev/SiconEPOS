import {SELECT_PRODUCT_GROUP, GET_PRODUCT_GROUPS} from './types';
import axios from 'axios';

export const selectProductGroup = (productGroup) => {
  return (dispatch, getState) => {
    dispatch({type: SELECT_PRODUCT_GROUP, productGroup: productGroup});
  };
};

export const getProductGroups = () => {
  return (dispatch, getState) => {
   var state = getState();
    axios
      .get(
        `${state.settingsReducer.settings.webapiaddress}Stock/GetProductGroupItemsForWarehouse?warehouseName=${state.settingsReducer.settings.warehouse}`
      )
      .then(function (response) {
        dispatch({type: GET_PRODUCT_GROUPS, payload: response.data});
      });
  };
};
