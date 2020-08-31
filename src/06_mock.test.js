import forEachAtEvenIndex from './06_mock';

test('mock', () => {
  const array = [10, 11, 12, 13, 14, 15];
  const callback = jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValue(false);
  forEachAtEvenIndex(array, callback);
  expect(callback.mock.calls).toEqual([
    [10, 0],
    [12, 2],
  ]);
  expect(callback.mock.results).toEqual([
    {type: 'return', value: true},
    {type: 'return', value: false},
  ]);
});
