
import saveData from './savedata';


test('display cuurent Id', () => {
  const save = saveData('currentId');
  expect(saveData(save)).toBe(undefined);
});

test('display project', () => {
  const save = saveData('projects');
  expect(saveData(save)).toBe(undefined);
});