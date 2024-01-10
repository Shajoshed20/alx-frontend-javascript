export default function groceriesList() {
  const returnMap = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  const groceries = Array.from(Object.keys(obj));

  groceries.map((item) => returnMap.set(item, obj[item]));
  return returnMap;
}
