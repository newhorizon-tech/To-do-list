const formatDate = (input) => {
  const options = {
    year: 'numeric', month: 'long', day: 'numeric',
  };

  const date = new Date(input);
  const result = date.toLocaleDateString('en-US', options);
  return result;
};

export default formatDate;
