import formatDate from './date';

test('Displays formatted output for specific date', () => {
  const testDate = new Date('1/1/2020');
  expect(formatDate(testDate)).toBe('January 1, 2020');
});

test('Displays formatted output for specific date', () => {
  const testDate = new Date('23 March 2021');
  expect(formatDate(testDate)).toBe('March 23, 2021');
});
