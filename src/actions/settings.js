import {STORE_SETTINGS, SET_SETTING} from './types';
import {AsyncStorage} from 'react-native';
import settingsConstants from '../constants/settingsConstants';

export const storeSettings = () => {
  return (dispatch, getState) => {
    let settingKeys = Object.keys(settingsConstants);
    let settingsToStore = {};

    let promises = [];

    for (let i = 0; i < settingKeys.length; i++) {
      promises.push(AsyncStorage.getItem(settingKeys[i]));
    }

    Promise.all(promises).then((settingsValues) => {
      for (let i = 0; i < settingKeys.length; i++) {

      // settingsValues.forEach((settingValue) => {
        let value = settingsValues[i] ?? settingsConstants[settingKeys[i]];
        settingsToStore[settingKeys[i]] = value;
      };

      console.log(settingsToStore);
      dispatch({type: STORE_SETTINGS, payload: settingsToStore});
    });
  };
};

export const setSetting = (key, value) => {
  return (dispatch, getState) => {
    console.log(key + ' ' + value);
    AsyncStorage.setItem(key, value);
    dispatch({type: SET_SETTING, key: key, value: value});
    // settingsService.storeData(key, value).then(() => {
    //   dispatch({type: SET_SETTING, key: key, value: value});
    // });
  };
};
