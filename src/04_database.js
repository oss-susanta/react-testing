const database = {
  start() {
    this.coupons = [];
  },
  shutdown() {
    delete this.coupons;
  },
  initCoupons(coupons) {
    this.coupons = coupons;
  },
  clearCoupons() {
    this.coupons = [];
  },
  query(secretKey) {
    return secretKey === 'secret' && this.coupons;
  },
};

export default database;