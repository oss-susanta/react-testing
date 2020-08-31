export default function forEachAtEvenIndex(array, callback) {
  for (let index = 0; index < array.length; index += 2) {
    const returnValue = callback(array[index], index);
    if (returnValue === false) return;
  }
}
