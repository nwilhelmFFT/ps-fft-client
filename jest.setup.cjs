/* eslint-disable @typescript-eslint/no-var-requires */
const matchers = require('jest-extended');
const { resetAllWhenMocks } = require('jest-when');

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
expect.extend(matchers);

afterEach(() => {
  jest.useRealTimers();
  jest.clearAllMocks();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  resetAllWhenMocks();
});
