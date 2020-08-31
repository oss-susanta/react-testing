import database from './04_database';
import {isCouponOk} from './04_life_cycle';

test('valid coupon, hard way', () => {
  database.start();
  database.initCoupons([
    'FLAT50',
    'SAT25',
    'SUN20',
    'FIRST75',
  ]);
  const output = isCouponOk('FIRST75');
  expect(output).toBeTruthy();
  database.clearCoupons();
  database.shutdown();
});

describe('test life cycle methods', () => {
  beforeAll(() => {
    database.start();
  });

  afterAll(() => {
    database.shutdown();
  });

  beforeEach(() => {
    database.initCoupons([
      'FLAT50',
      'SAT25',
      'SUN20',
      'FIRST75',
    ]);
  });

  afterEach(() => {
    database.clearCoupons();
  });

  test('valid coupon', () => {
    const output = isCouponOk('FLAT50');
    expect(output).toBeTruthy();
  });

  test('invalid coupon', () => {
    const output = isCouponOk('FLAT80');
    expect(output).toBeFalsy();
  });
});

// beforeAll
// beforeEach
// test 1
// afterEach
// beforeEach
// test 2
// afterEach
// afterAll