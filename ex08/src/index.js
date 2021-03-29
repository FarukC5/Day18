// Change code below this line
let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);

unionSet = new Set([...one].concat(...two));
console.log(unionSet);

intersectionSet = new Set([...one].filter((x) => [...two].includes(x)));
console.log(intersectionSet);

differenceSet = new Set([]);
console.log(differenceSet);
// Change code above this line
module.exports = { unionSet, intersectionSet, differenceSet };
