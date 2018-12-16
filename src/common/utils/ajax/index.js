import axios from 'axios';

/**
 * Ajax.query({url, params, method = 'get'})
 *
 */
export default class Ajax {

  static query({params = {}, url, method = 'get'}) {

    if (method === 'get') {
      params = { params };
    }

    return new Promise((resolve, reject) => {
      axios[method](url, params).then(res => {
        const { data, code, msg } = res.data;
        if (!code) {
          resolve(data);
        } else {
          reject(msg);
        }
      }).catch(err => {
        reject(err);
      });
    });
  }

}
