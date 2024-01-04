export default function createIteratorObject(report) {
  const value = [];
  for (const idx of Object.values(report.allEmployees)) {
    value.push(...idx);
  }

  return value;
}
