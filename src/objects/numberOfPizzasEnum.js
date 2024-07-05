const ORDER_TYPES = require("./orderTypes");

function numberOfPizzasEnum(orders) {
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].type === 0) {
      total += orders[i].pizzas;
    }
  }
  return total;
}

module.exports = numberOfPizzasEnum;
