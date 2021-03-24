import getData from './getData';

const initialize = (projects, id) => {
  if (localStorage.getItem('projects') == null) {
    projects = [];
  } else {
    projects = getData('projects');
  }

  if (localStorage.getItem('currentId') == null) {
    id = 0;
  } else {
    id = getData('currentId');
  }
  return ({ projects, id });
};

export default initialize;
