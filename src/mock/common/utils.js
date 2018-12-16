
import Mock from 'mockjs';
import qs from 'qs';

export const output = (data, code = 0, msg = '', notice = '') => {
  return Mock.mock({
    code,
    msg,
    notice,
    data,
  });
};

export function queryString(url) {
  if (url.indexOf('?') !== -1) {
    url = url.split('?')[1];
  }
  return qs.parse(url);
}
