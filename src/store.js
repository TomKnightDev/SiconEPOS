import {createStore, combineReducers, applyMiddleware} from 'redux';
import productGroupReducer from './reducers/productGroupReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    productGroupReducer: productGroupReducer
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;