# nextday [![Build Status](https://travis-ci.org/cullylarson/nextday.svg?branch=master)](https://travis-ci.org/cullylarson/nextday)

> Gets the next day of a date.


## Install

```
$ npm install --save nextday
```


## Usage

```js
var nextday = require('nextday');

var current = "2015-10-17"
var next = nextday(current)
// => 2015-10-18
```

*Can supply a Date object, a string, or an integer.  Providing a float, or any other
type with throw an exception.*


## License

MIT © Cully Larson
