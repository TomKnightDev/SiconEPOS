import {createStore, combineReducers, applyMiddleware} from 'redux';
import productGroupReducer from './reducers/productGroupReducer';
import stockItemReducer from './reducers/stockItemReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    productGroupReducer: productGroupReducer,
    stockItemReducer: stockItemReducer,
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;