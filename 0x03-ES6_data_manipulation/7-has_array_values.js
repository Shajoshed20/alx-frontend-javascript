/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, students) {
  let answer = true;
  students.map((x) => {
    if (!set.has(x)) {
      answer = false;
    }
  });

  return answer;
}
