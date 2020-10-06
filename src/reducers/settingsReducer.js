import { act } from 'react-test-renderer';
import {STORE_SETTINGS, SET_SETTING} from '../actions/types';

const initialState = {
  settings: {
    webapiaddress: 'test',
    warehouse: 'test'
  },
};

const settingsReducer = (state = initialState, action) => {
  let newSettings = {};
  switch (action.type) {
    case STORE_SETTINGS:
      // newSettings = {...state.settings};
      // newSettings[action.key] = action.value;
      console.log(action.payload);
       return {...state, settings: action.payload};

      // newSettings = {...state.settings};
      // newSettings = action.payload;
      // return {...state, settings: newSettings};
    case SET_SETTING:
      newSettings = {...state.settings};
      newSettings[action.key] = action.value;
      return {...state, settings: newSettings};
    default:
      return state;
  }
};

export default settingsReducer;
