import projectFactory from '../factory';

test('Creates a project based on given name', () => {
  const testProject = projectFactory('Test Project');
  expect(testProject.name).toBe('Test Project');
});

test('Creates two projects based on given names', () => {
  const testProject = projectFactory('Project One');
  const testProject2 = projectFactory('Project Two');

  expect([testProject.name, testProject2.name]).toStrictEqual(['Project One', 'Project Two']);
});

test('Creates multiple projects based on given names', () => {
  const projectsList = [];
  const projectNames = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

  projectNames.forEach((projectName) => {
    const testProject = projectFactory(projectName);
    projectsList.push(testProject);
  });

  const output = [];
  projectsList.forEach((project) => {
    output.push(project.name);
  });

  expect(output).toStrictEqual(projectNames);
});

test('Creates an empty list of tasts in a new project', () => {
  const testProject = projectFactory('Test Project');
  expect(testProject.list).toStrictEqual([]);
});

test('factory()', () => {
  const nameList = [];
  expect(projectFactory(nameList)).toBeTruthy();
});
