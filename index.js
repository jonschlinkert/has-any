/*!
 * has-any <https://github.com/jonschlinkert/has-any>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('isobject');

/**
 * Returns true if `obj` has any of the specified keys.
 *
 * @param  {Object} `obj`
 * @param  {Array} `keys`
 * @return {Boolean} Returns true if any of the keys match.
 */

module.exports = function hasAny(obj, keys) {
  if (!isObject(obj) && typeof obj !== 'function') {
    throw new TypeError('expected an object');
  }

  keys = !Array.isArray(keys) ? [keys] : keys;
  var len = keys.length;
  var idx = -1;

  while (++idx < len) {
    if (obj.hasOwnProperty(keys[idx])) {
      return true;
    }
  }
  return false;
};
