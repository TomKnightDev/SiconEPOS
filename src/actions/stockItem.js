import {ADD_TO_BASKET} from './types';

export const addToBasket = (stockItem) => {
    return (dispatch, getState) => {
        dispatch({type: ADD_TO_BASKET, stockItem: stockItem});
    };
};