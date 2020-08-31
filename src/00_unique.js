export default function unique(array) {
  const set = new Set(array);
  return Array.from(set);
}
