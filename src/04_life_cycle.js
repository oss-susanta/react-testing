import database from './04_database';

export function isCouponOk(coupon) {
  const coupons = database.query('secret');
  return coupons.includes(coupon);
}