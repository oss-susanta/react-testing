import unique from './00_unique';

test('unique removes duplicates', () => {
  const input = [0, 9, 2, 0, 1, 5]; // 1. arrange
  const expected = [0, 9, 2, 1, 5];
  const actual = unique(input);     // 2. act
  expect(actual).toEqual(expected); // 3. assert
});