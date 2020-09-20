import {ADD_TO_BASKET, REMOVE_FROM_BASKET, ADD_TO_BASKET_VIA_BARCODE} from './types';

export const addToBasket = (stockItem) => {
    return (dispatch, getState) => {
        dispatch({type: ADD_TO_BASKET, stockItem: stockItem});
    };
};

export const addToBasketViaBarcode = (barcode) => {
    return (dispatch, getState) => {
        var productGroups = getState().productGroupReducer.productGroups;
        dispatch({type: ADD_TO_BASKET_VIA_BARCODE, barcode: barcode});
    };
};

export const removeFromBasket = (basketItem) => {
    return (dispatch, getState) => {
        dispatch({type: REMOVE_FROM_BASKET, basketItem: basketItem});
    }
}