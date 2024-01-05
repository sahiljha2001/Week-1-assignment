/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const spentObject = {};

  transactions.forEach(({ category, price }) => {
    spentObject[category] = (spentObject[category] || 0) + price;
  });

  return spentObject;
}

const expenses = [
  {
    itemName: "fivestar",
    category: "chocolate",
    price: 10,
    timeStamp: new Date().getTime(),
  },
  {
    itemName: "mrinda",
    category: "coke",
    price: 20,
    timeStamp: new Date().getTime(),
  },
  {
    itemName: "dairymiilk",
    category: "chocolate",
    price: 20,
    timeStamp: new Date().getTime(),
  },
  {
    itemName: "mountaindew",
    category: "coke",
    price: 20,
    timeStamp: new Date().getTime(),
  }
];

let totalAmount = calculateTotalSpentByCategory(expenses);
console.log(totalAmount);

module.exports = calculateTotalSpentByCategory;
