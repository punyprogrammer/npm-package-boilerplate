// a sample function to get all values of a corresponding key in javascript
export function pluckValues(collection, key) {
  return collection?.map((item) => item[key]);
}
// const people = [
//   { name: "Alice", age: 28 },
//   { name: "Bob", age: 34 },
//   { name: "Charlie", age: 22 },
//   { name: "Diana", age: 30 },
//   { name: "Ethan", age: 25 },
//   { name: "Fiona", age: 27 },
//   { name: "George", age: 35 },
//   { name: "Hannah", age: 31 },
//   { name: "Ian", age: 24 },
//   { name: "Julia", age: 29 }
// ];
// console.log(pluckValues(people,'age'));