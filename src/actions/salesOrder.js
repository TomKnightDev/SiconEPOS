import {CREATE_SALES_ORDER} from './types';
import axios from 'axios'

export const createSalesOrder = (account, items) => {
    return (dispatch, getState) => {
      // console.log(items)
        // let salesOrder = {
        //     DocumentType: 'Order',
        //     Header: {
        //       AccountReference: account,
        //       // only required for my testing
        //       OverrideCreditLimitValidation: true,
        //     },
        //     NewStandardLines: [
        //     //   {
        //     //     LineQuantity: 1,
        //     //     WarehouseName: 'SHOWROOM',
        //     //     ItemCode: 'ACS/BLENDER',
        //     //   },
        //     ],
        //   };

        //   for (let i = 0; i < items.length; i++) {
        //     salesOrder.NewStandardLines.push(
        //         {
        //             LineQuantity: 1,
        //             WarehouseName: 'SHOWROOM',
        //             ItemCode: items[i].ItemCode
        //         }
        //     )              
        //   }
    
        //   axios
        //     .post(
        //       'http://192.168.122.66/Sicon.Sage200.WebAPI/api/SOPTest/CreateSalesOrder',
        //       salesOrder,
        //     )
        //     .then(function (response) {
        //       console.log(response);
        //     })
        //     .catch(function (error) {
        //       console.log(error);
        //     });

         dispatch({type: CREATE_SALES_ORDER, account: account, items: items});
    };
};