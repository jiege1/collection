
import * as CONST from '../const';

/**
 * 请求列表
 * @return {{type: string}}
 */
export const getList = () => {
  return {
    type: CONST.GET_LIST,
  };
};

/**
 * 请求成功成功
 * @param list
 * @return {{payload: {list: *}, type: string}}
 */
export const getListSuccess = (list) => {
  return {
    type: CONST.GET_LIST_SUCCESS,
    payload: {
      list,
    },
  };
};

