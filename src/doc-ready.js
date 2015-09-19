/*!
 * doc-ready.js
 */


define(function (require) {


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

  return doc.readyState === 'loading'
    ? doc.addEventListener('DOMContentLoaded', callback)
    : callback();
};


/* -----------------------------------------------------------------------------
 * expose
 * ---------------------------------------------------------------------------*/

return _docReady;


});