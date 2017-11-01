const test = require('ava')
const sinon = require('sinon')
const idle = require('../src')

test.cb('work with Promise', (t) => {
  idle().then(t.end)
})

test('work with await', async (t) => {
  await idle()
  t.pass()
})

test('uses requestIdleCallback if available', async (t) => {
  global.requestIdleCallback = sinon.stub().callsFake((cb) => cb())

  await idle()

  t.notThrows(() => sinon.assert.calledOnce(global.requestIdleCallback))

  global.requestIdleCallback = undefined
})

test('uses setTimeout if requestIdleCallback is not available', async (t) => {
  const sandbox = sinon.sandbox.create()
  sandbox.spy(global, 'setTimeout')

  await idle()

  t.notThrows(() => sinon.assert.calledOnce(global.setTimeout))

  sandbox.restore()
})
