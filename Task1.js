'use strict';
// You need to create a function, which will group an array of objects by a key.
// Requirements:
// 1. Ability to group by any key (in the example “universe” key is used).
// 2. Return an error if a key is not provided.
// 3. Return an error if an array is not provided.
// 4. Return an empty object if the provided key does not exist.
// 5. The function should be immutable (return a new array).
// Function example:
// export const groupBy = (arr, key) => {}
// Input data:
// [
// { id: 1, universe: "marvel", name: "Spider Man" },
// { id: 2, universe: "marvel", name: "Iron Man" },
// { id: 3, universe: "dc", name: "Aqua Man" },
// { id: 4, universe: "dc", name: "Bat Man" },
// { id: 5, universe: "marvel", name: "Hulk" }
// ]
// Result:
// {
//  marvel: [
//  { id: 1, universe: "marvel", name: "Spider Man" },
//  { id: 2, universe: "marvel", name: "Iron Man" },
//  { id: 5, universe: "marvel", name: "Hulk" }
//  ]
//  dc: [
//  { id: 3, universe: "dc", name: "Aqua Man" },
//  { id: 4, universe: "dc", name: "Bat Man" }
//  ]
// }

// const groupBy = [
//     { id: 1, universe: 'marvel', name: 'Spider Man' },
//     { id: 2, universe: 'marvel', name: 'Iron Man' },
//     { id: 3, universe: 'dc', name: 'Aqua Man' },
//     { id: 4, universe: 'dc', name: 'Bat Man' },
//     { id: 5, universe: 'marvel', name: 'Hulk' },
//   ],
//   result = groupBy.reduce(function (r, a) {
//     r[a.universe] = r[a.universe] || [];
//     r[a.universe].push(a);
//     return r;
//   }, Object.create(null));

// console.log(result);

// по любым критериям

// const names = [
//   { id: 1, universe: 'marvel', name: 'Spider Man' },
//   { id: 2, universe: 'marvel', name: 'Iron Man' },
//   { id: 3, universe: 'dc', name: 'Aqua Man' },
//   { id: 4, universe: 'dc', name: 'Bat Man' },
//   { id: 5, universe: 'marvel', name: 'Hulk' },
// ];

// Array.prototype.groupBy = function (prop) {
//   return this.reduce(function (groups, item) {
//     const val = item[prop];
//     groups[val] = groups[val] || [];
//     groups[val].push(item);
//     return groups;
//   }, {});
// };

// const groupByUniverse = names.groupBy('universe');
// console.log(groupByUniverse);

// const groupByName = names.groupBy('name');
// console.log(groupByName);

////

const groupByNames = (arr, key) => {
  const newGroup = {};
  arr.forEach((item) => {
    const newItem = Object.assign({}, item);
    delete newItem[key];
    newGroup[item[key]] = newGroup[item[key]] || [];
    newGroup[item[key]].push(newItem);
  });
  return newGroup;
};

const names = [
  { id: 1, universe: 'marvel', name: 'Spider Man' },
  { id: 2, universe: 'marvel', name: 'Iron Man' },
  { id: 3, universe: 'dc', name: 'Aqua Man' },
  { id: 4, universe: 'dc', name: 'Bat Man' },
  { id: 5, universe: 'marvel', name: 'Hulk' },
];

console.log(groupByNames(names, 'universe'));
