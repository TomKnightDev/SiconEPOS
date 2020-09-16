import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from './types';

export const addToBasket = (stockItem) => {
    return (dispatch, getState) => {
        dispatch({type: ADD_TO_BASKET, stockItem: stockItem});
    };
};

export const removeFromBasket = (basketItem) => {
    return (dispatch, getState) => {
        dispatch({type: REMOVE_FROM_BASKET, basketItem: basketItem});
    }
}