/*!
 * test/_umd.js
 */

define(function (require) {


/* -----------------------------------------------------------------------------
 * dependencies
 * ---------------------------------------------------------------------------*/

var assert = require('proclaim');
var docReady = require('doc-ready/doc-ready');


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('umd - doc-ready.js', function () {

  it('Should be function.', function () {
    assert.isFunction(docReady);
  });

});


});