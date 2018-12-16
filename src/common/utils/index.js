
/**
 * Utils
 * @desc 全局工具集
 */
export default class Utils {

  /**
   * 是否是本地开发环境
   *
   * @returns {boolean}
   */
  static isLocal() {
    return process.env.NODE_ENV === 'development';
  }
}
