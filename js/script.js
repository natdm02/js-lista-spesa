// 1. 

const items = ['Latte','Uova','Pane','Carne','Acqua','Fazzoletti',];

// 2.

console.log('items', items, items.length, typeof items);

const itemsList = document.getElementById('items');
console.log('itemsList', itemsList, typeof itemsList);

let i = 0;

// 3 

while (i < items.length) {

  console.log(i, items[i]);

  const newLi = document.createElement('li');
  newLi.innerHTML = items[i];
  itemsList.append(newLi);

// 4 

  i++

}