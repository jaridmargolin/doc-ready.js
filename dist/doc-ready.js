(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['docReady'] = factory();
  }
}(this, function () {

/*!
 * doc-ready.js
 */
var docReady;
docReady = function (require) {
  /* -----------------------------------------------------------------------------
   * docReady
   * ---------------------------------------------------------------------------*/
  /**
   * @global
   * @public
   *
   * @desc Browser `document ready` helper.
   *
   * @example
   * docReady(function () {
   *   app.start();
   * });
   *
   * @example
   * docReady(childWindow, function () {
   *   child.doSomething();
   * });
   *
   * @param {object} [doc=document] - Document to check readyState of.
   * @param {string} callback - Function to execute once document is ready. Will
   *   be fired immediately if document is in a ready state.
   */
  var _docReady = function (doc, callback) {
    if (arguments.length === 1) {
      callback = doc;
      doc = document;
    }
    return doc.readyState === 'loading' ? doc.addEventListener('DOMContentLoaded', callback) : callback();
  };
  /* -----------------------------------------------------------------------------
   * expose
   * ---------------------------------------------------------------------------*/
  return _docReady;
}({});

return docReady;


}));