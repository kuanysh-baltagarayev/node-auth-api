const order = [3,-5,2,6,-8,5,9]
console.log(order);
const newOrder = order.filter(num => num % 2 !== 0)
console.log(newOrder);
const allPositive = order.every(n => n > 0);
console.log(allPositive);
