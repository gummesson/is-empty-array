/**
 * Dependencies
 */

var test         = require('tape')
var isEmptyArray = require('../')

/**
 * Tests
 */

test('isEmptyArray(arr)', function(assert) {
  assert.equal(isEmptyArray([]), true, 'returns true if empty')
  assert.equal(isEmptyArray([1]), false, 'returns false if not empty')
  assert.equal(isEmptyArray({}), false, 'returns false if not an array')
  assert.end()
})
