import {ADD_TO_BASKET, REMOVE_FROM_BASKET, ADD_TO_BASKET_VIA_BARCODE, CLEAR_BASKET} from './types';

export const addToBasket = (stockItem) => {
    return (dispatch, getState) => {
        dispatch({type: ADD_TO_BASKET, stockItem: stockItem});
    };
};

export const addToBasketViaBarcode = (barcode) => {
    return (dispatch, getState) => {
        var productGroups = getState().productGroupReducer.productGroups;
        console.log(barcode);

        let stockItem = null;

        for (let pi = 0; pi < productGroups.length; pi++) {
            for (let ii = 0; ii < productGroups[pi].Items.length; ii++) {          
                if (productGroups[pi].Items[ii].Barcode == barcode) {
                    stockItem = productGroups[pi].Items[ii];
                    break;
                }                
            }
            
            if (stockItem != null) {
                dispatch({type: ADD_TO_BASKET, stockItem: stockItem});
                break;
            }
        }

        // dispatch({type: ADD_TO_BASKET_VIA_BARCODE, barcode: barcode});
    };
};

export const removeFromBasket = (basketItem) => {
    return (dispatch, getState) => {
        dispatch({type: REMOVE_FROM_BASKET, basketItem: basketItem});
    }
}

export const clearBasketItems = () => {
    return (dispatch, getState) => {
        dispatch({type: CLEAR_BASKET});
    }
}