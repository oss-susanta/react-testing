export function success(name) {
  return Promise.resolve(`Hi, ${name}...`);
  // return new Promise(resolve => setTimeout(
  //   () => resolve(`Hi, ${name}...`),
  //   2000
  // ));
}

export function error(name) {
  return Promise.reject(`Bye, ${name}...`);
}

export function callback(name, cb) {
  setTimeout(() => {
    cb(`Hi, ${name}...`);
  }, 1);
}