/**
 * Dependencies
 */

var test         = require('tape')
var isEmptyArray = require('../')

/**
 * Tests
 */

test('isEmptyArray(arr)', function(assert) {
  assert.equal(isEmptyArray([]), true)
  assert.equal(isEmptyArray([1]), false)
  assert.equal(isEmptyArray({}), false)
  assert.end()
})
