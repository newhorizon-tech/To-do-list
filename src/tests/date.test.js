import formatDate from '../date';

test('Displays formatted output for numeric input (MM/DD/YYYY)', () => {
  const testDate = new Date('1/2/2020');
  expect(formatDate(testDate)).toBe('January 2, 2020');
});

test('Displays formatted output for Day Month Year', () => {
  const testDate = new Date('23 March 2021');
  expect(formatDate(testDate)).toBe('March 23, 2021');
});

test('Displays formatted output for Month Day Year', () => {
  const testDate = new Date('April 1 2021');
  expect(formatDate(testDate)).toBe('April 1, 2021');
});

test('Displays formatted output for Year Month Day', () => {
  const testDate = new Date('2022 November 25');
  expect(formatDate(testDate)).toBe('November 25, 2022');
});

test('Displays todays date', () => {
  const testDate = new Date();
  expect(formatDate(testDate)).not.toBe('');
});
