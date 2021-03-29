
let shoppingList = new Map([
  [ "Banana", 3],                    
  [ "Pineapple", 5],
  [ "Pear", 2],
  [ "Carrot", 10],
  [ "Apple", 1.5],
]);

let arrKey = [];
for (let key of shoppingList.keys()) {
    arrKey.push(key);
}
  
  arrKey.forEach((key) => {
    console.log("groceries: ", key);
  });



