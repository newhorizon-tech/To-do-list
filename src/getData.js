const getData = (DataName) => JSON.parse(localStorage.getItem(DataName));

export default getData;