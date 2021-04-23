import saveData from '../savedata';
import getData from '../getData';

test('display cuurent Id as undefined', () => {
  const save = saveData('currentId');
  expect(saveData(save)).toBe(undefined);
});

test('display project as undefined', () => {
  const save = saveData('projects');
  expect(saveData(save)).toBe(undefined);
});

test('Saves and retreives the project list', () => {
  const projectsList = [1, 2, 3];
  saveData(projectsList);

  const storedList = getData('projects');
  expect(storedList).toStrictEqual(projectsList);
});

test('Saves and retreives the correct current ID', () => {
  const projectsList = ['placeholder'];
  saveData(projectsList, 25);

  const storedID = getData('currentId');
  expect(storedID).toBe(25);
});

test('Saves and retreives the correct project names', () => {
  const projectsList = [{
    name: 'default',
    list: [{
      id: 2, title: 'Get batteries from store', duedate: '2021-03-18', desc: '', note: '', priority: 'Medium',
    }],
  }, {
    name: 'cleaning',
    list: [{
      id: 1, title: 'Clean my room', duedate: '2021-03-31', desc: '', note: '', priority: 'Medium',
    }],
  }];
  saveData(projectsList, 25);

  const storedList = getData('projects');
  const projectNames = [];
  storedList.forEach((project) => {
    projectNames.push(project.name);
  });
  expect(projectNames).toStrictEqual(['default', 'cleaning']);
});
