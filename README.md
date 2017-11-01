<h1 align="center">idle-promise.js</h1>

<div align="center">
  <a href="https://www.npmjs.com/package/idle-promise"><img src="https://img.shields.io/npm/v/idle-promise.svg" /></a> <img src="http://img.badgesize.io/caiogondim/idle-promise.js/master/src/index.js?compression=gzip">
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

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
