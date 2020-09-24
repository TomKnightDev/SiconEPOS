import axios from 'axios';

import {CREATE_SALES_ORDER} from '../actions/types';

const initialState = {
  salesOrders: [],
};

const salesOrderReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case CREATE_SALES_ORDER:
      let salesOrder = {
        DocumentType: 'Order',
        Header: {
          AccountReference: action.account,
          // only required for my testing
          OverrideCreditLimitValidation: true,
        },
        NewStandardLines: [
          // {
          //   LineQuantity: 1,
          //   WarehouseName: 'SHOWROOM',
          //   ItemCode: 'ACS/BLENDER',
          // },
        ],
      };

      for (let i = 0; i < action.items.length; i++) {
        salesOrder.NewStandardLines.push({
          LineQuantity: 1,
          WarehouseName: 'SHOWROOM',
          ItemCode: action.items[i].Code,
        });
      }
      
      console.log(salesOrder);

      axios
        .post(
          // 'http://192.168.122.66/Sicon.Sage200.WebAPI/api/SOPTest/CreateSalesOrder',
          // 'http://10.0.0.91/Sicon.Sage200.WebAPI/api/SOPTest/CreateSalesOrder',
          'http://192.168.1.238/Sicon.Sage200.WebAPI/api/SOPTest/CreateSalesOrder',

          salesOrder,
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      return state;
    default:
      return state;
  }
};

export default salesOrderReducer;
