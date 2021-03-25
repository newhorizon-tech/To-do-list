import initialize from '../storagedata';

test('Initializes projects if there is no localstorage', () => {
  const initialData = initialize([], 0);

  const { projects } = initialData;

  expect(projects).toStrictEqual([]);
});

test('Initializes id if there is no localstorage', () => {
  const initialData = initialize([], 0);

  const { id } = initialData;

  expect(id).toBe(0);
});
