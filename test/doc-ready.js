/*!
 * test/doc-ready.js
 */

define(function (require) {


/* -----------------------------------------------------------------------------
 * dependencies
 * ---------------------------------------------------------------------------*/

var jquery = require('jquery');
var assert = require('proclaim');
var sinon = require('sinon');
var docReady = require('doc-ready');


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('doc-ready.js', function () {

  beforeEach(function (done) {
    this.$iframe = $('<iframe src="amd.html">').appendTo('body');
    this.win = this.$iframe[0].contentWindow;

    // This makes sure the iframe starts loading it src. Without this the dom
    // registers as loaded immediately.
    setTimeout(function () {
      this.iframedoc = this.win.document;
      done();
    }.bind(this), 0);
  });

  afterEach(function () {
    this.$iframe.remove();
  });

  it('Should use default document.', function (done) {
    docReady(done);
  });

  it('Should utilize passed document.', function (done) {
    docReady(this.iframedoc, function () {
      assert.isTrue(this.iframedoc.readyState !== 'loading');
      done();
    }.bind(this));
  });

  it('Should utlize `DOMContentLoaded` event if loading.', function (done) {
    docReady(this.iframedoc, function () {
      assert.isTrue(this.iframedoc.readyState !== 'loading');
      done();
    }.bind(this));

    // assert.isTrue(this.iframedoc.readyState === 'loading');
  });

  it('Should execute immediately if ready.', function () {
    var executeImmediately = false;

    docReady(function () {
      executeImmediately = true;
    }.bind(this));

    assert.isTrue(executeImmediately);
  });

});


});