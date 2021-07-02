import nodeFetch from 'node-fetch';
import nodeAbortController from 'abort-controller';

const abortController = typeof AbortController === 'undefined' ? nodeAbortController : AbortController;

export default typeof fetch === 'undefined' ? nodeFetch : fetch;
export { abortController as AbortController };
