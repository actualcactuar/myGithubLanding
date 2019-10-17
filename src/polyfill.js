// eslint-disable-next-line no-unused-vars
import { Promise } from '../node_modules/core-js/es6/promise';

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = (callback, thisArg = window) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
