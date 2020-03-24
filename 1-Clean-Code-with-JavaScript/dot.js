let products = [
  { name: "CPU", price: 228.99, bought: true },
  { name: "RAM", price: 67.99, bought: false },
  { name: "Hard Drive", price: 70, bought: true },
  { name: "Keyboard", price: 22.5, bought: false }
];

prepareData();

function prepareData() {
  addIds(products);
  const boughtItems = getBoughtItems(products);
  const totalCost = computeTotalCost(boughtItems);
  console.log(`Total cost : ${totalCost}`);
}

function addIds(items) {
  items.map(appendIds);
}

function getBoughtItems(items) {
  const boughtItems = items.filter(selectBought).map(item => item);
  return boughtItems;
}

function computeTotalCost(items) {
  let totalCost = items.reduce(sumAmount, 0);
  return totalCost;
}

// ************************** callback functions **************************

function appendIds(v, i, list) {
  v.id = i + 1;
}

function selectBought(v, i, list) {
  return v.bought === true;
}

function sumAmount(acc, current) {
  return (acc += current.price);
}

// ************************** end of callback functions **************************

/*
  function addIds(items) {
      for (let i = 0; i < items.length; i++) {
        items[i].id = i + 1;
      }
  }
  
  function getBoughtItems(items) {
      let boughtItems = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].bought) {
          boughtItems.push(items[i]);
        }
      }
      return boughtItems;
  }
  
  function computeTotalCost(items) {
    let totalCost = 0;
    for (let i = 0; i < items.length; i++) {
      totalCost += items[i].price;
    }
    return totalCost;
  }
  */
