import nodeFetch from 'node-fetch';

export default typeof fetch === 'undefined' ? nodeFetch : fetch;
