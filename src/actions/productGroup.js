import {SELECT_PRODUCT_GROUP} from './types';

export const selectProductGroup = (productGroup) => (
    {
        type: SELECT_PRODUCT_GROUP,
        productGroup: productGroup
    }
);