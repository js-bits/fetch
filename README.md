# Cross-environment (nodejs/web) fetch APi

This package exports `window.fetch` object in a browser and `node-fetch` module in a Node.js environment. Which is helpful when you develop a package compatible with both environments and use `fetch` for HTTP requests. Allows to avoid conditional imports.

Also exports `AbortController` for both environments.

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
import fetch, { AbortController } from '@js-bits/fetch';
```

## How to use

```javascript
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Notes

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [abort-controller](https://www.npmjs.com/package/abort-controller)
