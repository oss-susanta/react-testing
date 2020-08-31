export default function echo(name, cb) {
  setTimeout(() => cb(name), 5000);
}