import {createStore, combineReducers} from 'redux';
import productGroupReducer from './reducers/productGroupReducer';

const rootReducer = combineReducers({
    productGroupReducer: productGroupReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;