<img src="http://rawgit.com/caiogondim/idle-promise.js/master/logo/banner.svg" width="100%" />

<h1 align="center">idle-promise.js</h1>

<div align="center">
  <a href="https://www.npmjs.com/package/idle-promise"><img src="https://img.shields.io/npm/v/idle-promise.svg" /></a> <img src="http://img.badgesize.io/caiogondim/idle-promise.js/master/src/index.js?compression=gzip"> <a href='https://coveralls.io/github/caiogondim/idle-promise.js'><img src='https://coveralls.io/repos/github/caiogondim/idle-promise.js/badge.svg' alt='Coverage Status' /></a> <img src="http://travis-ci.org/caiogondim/idle-promise.js.svg?branch=master" alt="Travis CI">

</div>

<br>

`requestIdleCallback` with a Promise interface and `setTimeout` fallback.

## Installation

```bash
npm install --save idle-promise
```

## Usage

### Promise

```js
const idle = require('idle-promise')

idle().then(() => {
  // Do somethgin when idle
  // ...
})
```

### await

```js
const idle = require('idle-promise')

await idle()

// Do somethgin when idle
// ...
```

## Credits

- Icon created by Adrien Coquet

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
