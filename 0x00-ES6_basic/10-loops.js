/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const value = [];
  for (const idx of array) {
    value.push(appendString + idx);
  }

  return value;
}
