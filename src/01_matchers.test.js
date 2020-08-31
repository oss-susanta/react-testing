test('boolean comparison', () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});

test('string comparisons', () => {
  expect('abc').toEqual('abc');
  expect('Abc').toMatch(/ABC/i);
});

test('number comparisons', () => {
  expect(1).toBeLessThan(2);
  expect(2).toBeLessThanOrEqual(2);
  expect(2).toEqual(2);
  expect(2).toBeGreaterThanOrEqual(2);
  expect(3).toBeGreaterThan(2);
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

test('iterabele matchers', () => {
  expect('abc').toContain('b');
  expect([1, 2, 3]).toContain(3);
});

test('negation', () => {
  expect('abc').not.toEqual('ABC');
});
