# has-any [![NPM version](https://img.shields.io/npm/v/has-any.svg)](https://www.npmjs.com/package/has-any) [![Build Status](https://img.shields.io/travis/jonschlinkert/has-any.svg)](https://travis-ci.org/jonschlinkert/has-any)

> Returns true if an object has any of the specified keys.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install has-any --save
```

## Usage

```js
var hasAny = require('has-any');

hasAny({a: 'b', c: 'd'}}, 'c');
//=> true

hasAny({a: {b: {c: 'c'}}, foo: 'bar'}, ['foo', 'quux']);
//=> true
```

## Related projects

* [has-any-deep](https://www.npmjs.com/package/has-any-deep): Return true if `key` exists deeply on the given object.  | [homepage](https://github.com/jonschlinkert/has-any-deep)
* [has-prop](https://www.npmjs.com/package/has-prop): Return true if an object has the given key. Dot-notation may be used to check… [more](https://www.npmjs.com/package/has-prop) | [homepage](https://github.com/jonschlinkert/has-prop)
* [has-value](https://www.npmjs.com/package/has-value): Returns true if a value exists, false if empty. Works with deeply nested values using… [more](https://www.npmjs.com/package/has-value) | [homepage](https://github.com/jonschlinkert/has-value)
* [object.omit](https://www.npmjs.com/package/object.omit): Return a copy of an object excluding the given key, or array of keys. Also… [more](https://www.npmjs.com/package/object.omit) | [homepage](https://github.com/jonschlinkert/object.omit)
* [object.pick](https://www.npmjs.com/package/object.pick): Returns a filtered copy of an object with only the specified keys, similar to `  _.pick`… [more](https://www.npmjs.com/package/object.pick) | [homepage](https://github.com/jonschlinkert/object.pick)
* [omit-empty](https://www.npmjs.com/package/omit-empty): Recursively omit empty properties from an object. Omits empty objects, arrays, strings or zero. | [homepage](https://github.com/jonschlinkert/omit-empty)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/has-any/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the [MIT license](https://github.com/jonschlinkert/has-any/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on March 21, 2016._