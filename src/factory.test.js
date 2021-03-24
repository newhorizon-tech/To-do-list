import factory from './factory';

test('factory()', () => {
  const nameList = [];
  expect(factory(nameList)).not.toBe('list, name');
});

test('factory()', () => {
  const nameList = [];
  expect(factory(nameList)).toBeTruthy();
});