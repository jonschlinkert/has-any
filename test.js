/*!
 * has-any <https://github.com/jonschlinkert/has-any>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var hasAny = require('./');

describe('.hasAny()', function() {
  it('should return `true` when the specified nested property exists.', function() {
    assert(hasAny({a: {b: {c: 'foo'}}}, ['a', 'g']));
    assert(hasAny({a: {b: {c: 'foo'}}, bar: true}, ['foo', 'bar']));
  });

  it('should return `false` when the specified nested property does not exist.', function() {
    assert(!hasAny({a: {b: {c: 'foo'}}}, ['b']));
    assert(!hasAny({a: {b: {c: 'foo'}}}, ['c']));
    assert(!hasAny({a: {b: {c: 'foo'}}}, ['d']));
  });
});
