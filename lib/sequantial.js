/*
 * @license
 * cocotte-sequantial v0.1.0
 * Copyright(c) 2015 Yuki Kurata <yuki.kurata@gmail.com>
 * MIT Licensed
 */

/**
 * 順次処理用のメソッドをミックスインする
 * @method mixin
 * @param  {Function} target
 * @param  {String}   listName
 */
module.exports = function mixin (target, listName) {

  /**
   * 各行に対して関数を呼び出します
   * @method forEach
   * @param  {Function} callback
   */
  target.forEach = function forEach (callback) {
    var list = [].slice.call(this[listName]);
    var len = list.length;
    for(var i = 0; i < len; i++) {
      callback(list[i], i, list);
    }
  };

  /**
   * すべての行に対して、真であるかを調査する
   * @method every
   * @param  {Function} callback
   * @return {Boolean}
   */
  target.every = function every (callback) {
    var list = [].slice.call(this[listName]);
    var len = list.length;
    for(var i = 0; i < len; i++) {
      if (!callback(list[i], i, list)) {
        return false;
      }
    }
    return true;
  };

  /**
   * いずれかの行に対して、真であるかを調査する
   * @method some
   * @param  {Function} callback
   * @return {Boolean}
   */
  target.some = function some (callback) {
    var list = [].slice.call(this[listName]);
    var len = list.length;
    for(var i = 0; i < len; i++) {
      if (callback(list[i], i, list)) {
        return true;
      }
    }
    return false;
  };

  /**
   * callbackを満たす行を配列で返す
   * @method filter
   * @param  {Function} callback
   * @return {Array}
   */
  target.filter = function filter (callback) {
    var list = [].slice.call(this[listName]);
    var len = list.length;
    var result = [];
    for(var i = 0; i < len; i++) {
      if (callback(list[i], i, list)) {
        result.push(list[i]);
      }
    }
    return result;
  };

  /**
   * 各行から新しい配列を作成します
   * @method map
   * @param  {Function} callback
   */
  target.map = function map (callback) {
    var list = [].slice.call(this[listName]);
    var len = list.length;
    var result = [];
    for(var i = 0; i < len; i++) {
      result.push(callback(list[i], i, list));
    }
    return result;
  };

  /**
   * 各行から値を計算します
   * @method reduce
   * @param  {Function} callback
   * @param  {Mixed}    initial
   * @return {Mixed}    result
   */
  target.reduce = function reduce (callback, initial) {
    var list = [].slice.call(this[listName]);
    var len = list.length;
    var value = initial;
    for(var i = 0; i < len; i++) {
      value = callback(value, list[i], i, list);
    }
    return value;
  };

  /**
   * 各行をインデックスの降順で値を計算します
   * @method reduceRight
   * @param  {Function} callback
   * @param  {Mixed}    initial
   * @return {Mixed}    result
   */
  target.reduceRight = function reduceRight (callback, initial) {
    var list = [].slice.call(this[listName]);
    var len = list.length;
    var value = initial;
    for(var i = len - 1; -1 < i; i--) {
      value = callback(value, list[i], i, list);
    }
    return value;
  };

};
