# Cross-environment (nodejs/web) fetch APi

This package exports `window.fetch` object in a browser and [node-fetch](https://www.npmjs.com/package/node-fetch) module in a Node.js environment. Which is helpful when you develop a package compatible with both environments and use `fetch` for HTTP requests. Allows to avoid conditional imports.

Also exports `AbortController` ([abort-controller](https://www.npmjs.com/package/abort-controller) module for Node.js) for both environments.

## Installation

Install with npm:

```
npm install @js-bits/fetch
```

Install with yarn:

```
yarn add @js-bits/fetch
```

Import where you need it:

```javascript
import { fetch, AbortController } from '@js-bits/fetch';
```

or require for CommonJS:

```javascript
const { fetch, AbortController } = require('@js-bits/fetch');
```

## How to use

```javascript
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Notes

- The package versions are alined with [node-fetch](https://www.npmjs.com/package/node-fetch) versions.
- [v2](https://www.npmjs.com/package/@js-bits/fetch/v/2.0.0) of this package supports [v2](https://github.com/node-fetch/node-fetch/tree/2.x#readme) of [node-fetch](https://www.npmjs.com/package/node-fetch).
- Minimal size (bytes) in a browser since [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is natively supported. Does not include any polyfills, which means that Internet Explorer is not supported.
