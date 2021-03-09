import './styles.scss';

import projectFactory from './factory';
import { initialize, saveData } from './storagedata';
import { displayProjects } from './display'; // eslint-disable-line

const initialData = initialize([], 0);

const { projects } = initialData;

let { id } = initialData;

// crating To-do's
const todoFactory = (title, duedate, desc, note, priority, temp = 'Empty') => {
  if (temp === 'Empty') {
    id += 1;
  } else {
    id = temp;
  }
  return {
    id, title, duedate, desc, note, priority,
  };
};

// delete task from projects

const deleteItem = (task, project) => {
  const currentProject = projects.find(o => o.name === project.name);
  currentProject.list = currentProject.list.filter(x => x.id !== task.id);

  saveData(projects, id);
  displayProjects(projects);
};

const projectNameList = (list) => {
  projects.forEach((project) => list.push(project.name));
  return list;
};

// save modified data + removing it to the Existing + new projects
const saveModifiedData = (item, project) => {
  const title = document.querySelector('#inputtitle').value;
  const date = document.querySelector('#inputdate').value;
  const description = document.querySelector('#inputdescription').value;
  const note = document.querySelector('#inputnote').value;
  const priority = document.querySelector('#inputpriority').value;
  let projectname = document.querySelector('#inputproject').value;

  projectname = (projectname === '') ? 'default' : projectname;

  const currentId = item.id;

  const oldProject = projects.find(o => o.name === project.name);

  const newProject = projects.find(o => o.name === projectname);

  const oldTask = oldProject.list.find(x => x.id === currentId);

  const newTask = todoFactory(title, date, description, note, priority, currentId);

  // 1. New project
  // 2. Existing and Same project
  // 3. Existing but different projects

  if (newProject == null) {
    const newProject = projectFactory(projectname);
    newProject.list.push(newTask);
    projects.push(newProject);
    deleteItem(oldTask, oldProject);
  } else if (newProject.name === oldProject.name) {
    newProject.list = newProject.list.map(x => ((x.id === currentId) ? newTask : x));
  } else {
    newProject.list.push(newTask);
    deleteItem(oldTask, oldProject);
  }
  saveData(projects, id);
  displayProjects(projects);

  return false;
};

// display the modify data in the form
const modifyItem = (item, project) => {
  const title = document.querySelector('#inputtitle');
  const date = document.querySelector('#inputdate');
  const description = document.querySelector('#inputdescription');
  const note = document.querySelector('#inputnote');
  const priority = document.querySelector('#inputpriority');
  const projectform = document.querySelector('#inputproject');

  title.value = item.title;
  date.value = item.duedate;
  description.value = item.description;
  note.value = item.note;
  priority.value = item.priority;
  projectform.value = project.name;

  const newBtn = document.createElement('button');
  const div = document.querySelector('#btn-div');
  div.innerHTML = '';
  newBtn.setAttribute('class', 'btn btn-primary');
  newBtn.setAttribute('id', 'tasksubmit');
  newBtn.textContent = 'Modify Task';

  div.append(newBtn);
  newBtn.onclick = () => saveModifiedData(item, project);

  // const btn1 = document.querySelector('#tasksubmit');
  // btn1.textContent = 'modify task';
};

// create the input due date
// const formatDate = (input) => {
//   const options = {
//     year: 'numeric', month: 'long', day: 'numeric',
//   };

//   const date = new Date(input);
//   const result = date.toLocaleDateString('en-US', options);
//   return result;
// };

if (projects.length === 0) {
  const defaultProject = projectFactory('default');

  projects.push(defaultProject);
} else {
  displayProjects(projects);
}

// Adds a task to the project (project is a string)
const addTaskToProject = (task, project) => {
  const currentProject = projects.find(o => o.name === project);
  currentProject.list.push(task);
  saveData(projects, id);
  displayProjects(projects);
};

//  store the list of tasks
// let listElement = [];

// Parses the form input
const forminput = () => {
  const title = document.querySelector('#inputtitle').value;
  const date = document.querySelector('#inputdate').value;
  const description = document.querySelector('#inputdescription').value;
  const note = document.querySelector('#inputnote').value;
  const priority = document.querySelector('#inputpriority').value;
  let projectname = document.querySelector('#inputproject').value;

  projectname = (projectname === '') ? 'default' : projectname;

  const currentTask = todoFactory(title, date, description, note, priority);
  const list = projectNameList([]);
  if (!list.includes(projectname)) {
    const newProject = projectFactory(projectname);
    projects.push(newProject);
  }
  addTaskToProject(currentTask, projectname);
};

// Main create task button
const btn = document.querySelector('#tasksubmit');

btn.onclick = forminput;

export { modifyItem, deleteItem };
