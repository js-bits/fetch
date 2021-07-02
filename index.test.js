import fetch, { AbortController } from './index.js';

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
