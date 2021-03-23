// const formatDate = require('./display');

import { formatDate } from './display';

test('Displays formatted output for specific date', () => {
  const testDate = new Date('1/1/2020');
  expect(formatDate(testDate)).toBe('1 January 2020');
});
