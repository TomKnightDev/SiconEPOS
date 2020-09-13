import {SELECT_PRODUCT_GROUP} from '../actions/types';
import productGroups from '../data_access/getProductGroups';

const initialState = {
  productGroups,
//    [
//     {
//       id: 0,
//       text: 'Veg',
//       uri:
//         'http://192.168.1.196/Sicon.Sage200.WebAPI/api/WorksOrderLineAPI/GetWorksOrderLines?WONumber=WO00000001',
//       items: [
//         {
//           id: 0,
//           text: 'Cabbage',
//         },
//       ],
//     },
//     {
//       id: 1,
//       text: 'Dairy',
//       uri:
//         'http://192.168.1.196/Sicon.Sage200.WebAPI/api/WorksOrderLineAPI/GetWorksOrderLines?WONumber=WO00000002',
//       items: [
//         {
//           id: 0,
//           text: 'Cheese',
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: 'Fruit',
//       uri:
//         'http://192.168.1.196/Sicon.Sage200.WebAPI/api/WorksOrderLineAPI/GetWorksOrderLines?WONumber=WO00000002',
//     },
//   ],
   selectedProductGroup: productGroups[0]
//    {
//     id: 0,
//     text: 'Veg',
//     uri:
//       'http://192.168.1.196/Sicon.Sage200.WebAPI/api/WorksOrderLineAPI/GetWorksOrderLines?WONumber=WO00000001',
//     items: [
//       {
//         id: 0,
//         text: 'Cabbage',
//       },
//     ],
//   },
};

const productGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT_GROUP:
      console.log(action);

      let pg = state.selectedProductGroup;
      for (let i = 0; i < state.productGroups.length; i++) {
        if (state.productGroups[i].id == action.productGroup) {
          pg = state.productGroups[i];
        }
      }

      return {...state, selectedProductGroup: pg};
    default:
      return state;
  }
};

export default productGroupReducer;
