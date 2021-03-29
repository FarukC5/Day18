// Only change below this line
let rockStar = new Map([
  ["artist", "The Roling Stones"],
  ["song", "Angie"],
  ["album", "Goats Head Soup"],
  ["singer", "Mike Jagger"],
]);

let newRock = new Map([...rockStar]);


console.log(newRock);
// Only change code above this line

module.exports = { rockStar, newRock };
