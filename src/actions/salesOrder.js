import {CREATE_SALES_ORDER} from './types';
import axios from 'axios'

export const createSalesOrder = (account, items) => {
    return (dispatch, getState) => {
      let state = getState();

      let salesOrder = {
        DocumentType: 'Order',
        Header: {
          AccountReference: state.salesLedgerReducer.selectedAccount.Reference,
          OverrideCreditLimitValidation: true,
          InvoicePaymentImmediately: true,
          PaymentMethod: 'Visa Credit',
          PaymentStatus: 'Full',
        },
        NewStandardLines: [
          // {
          //   LineQuantity: 1,
          //   WarehouseName: 'SHOWROOM',
          //   ItemCode: 'ACS/BLENDER',
          // },
        ],
      };

      for (let i = 0; i < items.length; i++) {
        salesOrder.NewStandardLines.push({
          LineQuantity: items[i].Quantity,
          WarehouseName: state.settingsReducer.settings.warehouse,
          ItemCode: items[i].Code,
        });
      }

      console.log(salesOrder);

      let salesOrderResponse;

      axios
        .post(
          `${state.settingsReducer.settings.webapiaddress}SOPTest/CreateSalesOrder`,
          // 'http://10.0.0.162/Sicon.Sage200.WebAPI/api/SOPTest/CreateSalesOrder',
          // 'http://192.168.122.66/Sicon.Sage200.WebAPI/api/SOPTest/CreateSalesOrder',
          // 'https://events1.sicon.co.uk/Sicon.Sage200.WebAPI/api/SOPTest/CreateSalesOrder',
          // 'http://192.168.1.238/Sicon.Sage200.WebAPI/api/SOPTest/CreateSalesOrder',

          salesOrder,
        )
        .then(function (response) {
          console.log(response.data);
          salesOrderResponse = response.data;

          axios
            .post(
              `${state.settingsReducer.settings.webapiaddress}SOP/SOPAllocate/?SOPDocumentNo=${salesOrderResponse.DocumentNo}`,
              // `https://events1.sicon.co.uk/Sicon.Sage200.WebAPI/api/SOP/SOPAllocate/?SOPDocumentNo=${salesOrderResponse.DocumentNo}`,
            )
            .then(function (response) {
              axios
                .post(
                  `${state.settingsReducer.settings.webapiaddress}SOP/SOPDespatch/?SOPDocumentNo=${salesOrderResponse.DocumentNo}`,
                  // `https://events1.sicon.co.uk/Sicon.Sage200.WebAPI/api/SOP/SOPDespatch/?SOPDocumentNo=${salesOrderResponse.DocumentNo}`,
                )
                .then(function (response) {});
            });
        })
        .catch(function (error) {
          console.log(error);
        });

         dispatch({type: CREATE_SALES_ORDER, account: account, items: items});
    };
};