module.exports = function idlePromise() {
  return new Promise(resolve => {
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(resolve)
    } else {
      setTimeout(resolve)
    }
  })
}
