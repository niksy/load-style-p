# load-style-p

[![Build Status][ci-img]][ci] [![BrowserStack Status][browserstack-img]][browserstack]

Load style as promise.

## Install

```sh
npm install load-style-p --save
```

## Usage

```js
import loadStyle from 'load-style-p';

loadStyle('http://example.com/jackie.css')
	.then(()=> {
		// ...
	});
```

## API

### loadStyle(src)

Returns: `Promise`

Loads stylesheet from URL.

#### src

Type: `String`

Stylesheet URL.

## Browser support

Tested in IE9+ and all modern browsers. `Promise` should be available globally.

## Test

For automated tests, run `npm run test:automated` (append `:watch` for watcher support).

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.com/niksy/load-style-p
[ci-img]: https://travis-ci.com/niksy/load-style-p.svg?branch=master
[browserstack]: https://www.browserstack.com/
[browserstack-img]: https://www.browserstack.com/automate/badge.svg?badge_key=NkFpT2NHd0hWU2RHUVJtakNXQmt0a3A2QUh6aEZYSTFCS0V2K1pYTFUzTT0tLWVzNi9NK25xeDBLUWo2WTFZMGFsOFE9PQ==--20923c6b1536758cf4169e6180dcbf6b2c5eca5f
