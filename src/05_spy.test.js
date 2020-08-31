import database from './04_database';
import {isCouponOk} from './04_life_cycle';

test('spyOn', () => {
  const spy = jest.spyOn(database, 'query');
  spy.mockImplementation(() => ['SUN50']);
  const output = isCouponOk('SUN50');
  expect(spy).toHaveBeenCalledWith('secret');
  expect(output).toBeTruthy();
  spy.mockRestore();
});