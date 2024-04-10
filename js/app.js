let item_names = ['Phone', 'Tablet', 'Watch'];
let item_prices = [300, 400, 200];
let in_stock = [true, false, true];

let first_item_name = item_names[0];
let first_item_price = item_prices[0];

console.log(first_item_name);
console.log(first_item_price);

item_names.push('Earbuds');
item_prices.push('100');
in_stock.push(true);

console.log(item_names);
console.log(in_stock);

let last_item_name = item_names.pop();
let last_item_price = item_prices.pop();
let last_item_stock = in_stock.pop();

console.log(last_item_name);
console.log(item_names);
