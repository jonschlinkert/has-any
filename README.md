# has-any [![NPM version](https://badge.fury.io/js/has-any.svg)](http://badge.fury.io/js/has-any)


> Returns true if an object has any of the specified keys.

## Install
#### Install with [npm](npmjs.org):

```bash
npm i has-any --save-dev
```

## Run tests

```bash
npm test
```

## Usage

```js
var hasAny = require('has-any');

hasAny({a: 'b', c: 'd'}}, 'c');
//=> true

hasAny({a: {b: {c: 'c'}}, foo: 'bar'}, ['foo', 'quux']);
//=> true
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 09, 2014._