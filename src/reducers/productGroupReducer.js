import {
  SELECT_PRODUCT_GROUP,
  GET_PRODUCT_GROUPS,
} from '../actions/types';

const initialState = {
  productGroups: [],
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
    default:
      return state;
  }
};

export default productGroupReducer;
