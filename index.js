/// <reference lib="DOM" />
import nodeFetch from 'node-fetch';

const exportFetch = typeof fetch === 'undefined' ? nodeFetch : fetch;
export default exportFetch;
