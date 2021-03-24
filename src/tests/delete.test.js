import deleteItem from '../index';

const projects = [{
  name: 'default',
  list: [{
    id: 1, title: 'Task One', duedate: '2021-03-28', desc: '', note: '', priority: 'Medium',
  }, {
    id: 2, title: 'Task Two', duedate: '2021-03-28', desc: '', note: '', priority: 'Low',
  }, {
    id: 3, title: 'Task Three', duedate: '2021-03-28', desc: '', note: '', priority: 'High',
  }],
}];

test('Delete a single task', () => {
  const testTask = projects[0].list[1];
  console.log(testTask);

  // {
  //   id: 2, title: 'Task Two', duedate: '2021-03-28', desc: '', note: '', priority: 'Low',
  // };
  const testProject = projects[0];

  deleteItem(testTask, testProject);

  expect(projects[0].list.length).toBe(2);
});
