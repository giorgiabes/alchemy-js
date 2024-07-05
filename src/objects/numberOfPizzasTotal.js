function numberOfPizzasTotal(orders) {
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    total += orders[i].pizzas;
  }
  return total;
}

module.exports = numberOfPizzasTotal;
