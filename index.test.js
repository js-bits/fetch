import fetch, { AbortController } from './index.js';
// const { default: fetch, AbortController } = require('./dist/index.cjs');

describe(`fetch`, () => {
  test('should be defined', () => {
    expect(fetch).toBeDefined();
  });
});

describe(`AbortController`, () => {
  test('should be defined', () => {
    expect(AbortController).toBeDefined();
  });
});
