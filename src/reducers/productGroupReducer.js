import {
  SELECT_PRODUCT_GROUP,
  GET_PRODUCT_GROUPS,
  SET_PRODUCT_GROUPS,
} from '../actions/types';
import mockProductGroups from '../data_access/mock_product_groups.json';
import { setProductGroups, getProductGroups } from '../actions/productGroup';
import { gpg } from '../data_access/stock';

const initialState = {
  productGroups: GET_PRODUCT_GROUPS,
  selectedProductGroup: {},
};

const productGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT_GROUP:
      // console.log(action);

      let pg = state.selectedProductGroup;
      for (let i = 0; i < state.productGroups.length; i++) {
        if (state.productGroups[i].ProductGroupID == action.productGroup) {
          pg = state.productGroups[i];
          break;
        }
      }
      return {...state, selectedProductGroup: pg};
    case GET_PRODUCT_GROUPS:
      console.log('Getting product groups')
      return Object.assign({}, state, {productGroups: action.payload} );
    case SET_PRODUCT_GROUPS:
      console.log('Setting product groups');
      return {...state, productGroups: state.productGroups};
    default:
      return state;
  }
};

export default productGroupReducer;
