import { combineReducers } from 'redux';


/**
 * StoreUtils
 * 部分关于 store, reducer的工具
 */
export default class StoreUtils {

  static makeReducer(asyncReducers) {
    return combineReducers(asyncReducers);
  }

}
