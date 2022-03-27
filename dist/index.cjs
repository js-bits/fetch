'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var nodeFetch = require('node-fetch');
var nodeAbortController = require('abort-controller');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var nodeFetch__default = /*#__PURE__*/_interopDefaultLegacy(nodeFetch);
var nodeAbortController__default = /*#__PURE__*/_interopDefaultLegacy(nodeAbortController);

const abortController = typeof AbortController === 'undefined' ? nodeAbortController__default["default"] : AbortController;
const exportFetch = typeof fetch === 'undefined' ? nodeFetch__default["default"] : fetch;

exports.AbortController = abortController;
exports.fetch = exportFetch;
