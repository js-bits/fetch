# Cross-environment (nodejs/web) fetch APi

This package exports `window.fetch` object in a browser and [node-fetch](https://www.npmjs.com/package/node-fetch) module in a Node.js environment. Which is helpful when you develop a package compatible with both environments and use `fetch` for HTTP requests. Allows to avoid conditional imports.

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
import fetch from '@js-bits/fetch';
```

## How to use

```javascript
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Notes

- The package versions are aligned with [node-fetch](https://www.npmjs.com/package/node-fetch) versions.
- CommonJS module export removed since version 3
- [version 2](https://www.npmjs.com/package/@js-bits/fetch/v/2.0.0) of this package supports [version 2](https://github.com/node-fetch/node-fetch/tree/2.x#readme) of [node-fetch](https://www.npmjs.com/package/node-fetch).
- Minimal size (bytes) in a browser since [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is natively supported. Does not include any polyfills.
