/**
 * Dependencies
 */

var typeOf = require('type-of')

/**
 * Check if `arr` is empty.
 *
 * @param  {array} arr
 * @return {boolean}
 *
 * @api public
 */

function isEmptyArray(arr) {
  return typeOf(arr) === 'array' && !arr.length
}

/**
 * Exports
 */

module.exports = isEmptyArray
