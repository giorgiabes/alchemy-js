const { assert } = require("chai");
const order = require("../src/objects/order");
const numberOfPizzas = require("../src/objects/numberOfPizzas");

describe("order", () => {
  it("should have a number of pizzas", () => {
    assert(
      order.hasOwnProperty("pizzas"),
      "make sure to add pizzas to the order object!"
    );
    assert.equal(typeof order.pizzas, "number");
    assert.isAbove(order.pizzas, 0);
  });
  it("should have an extraCheese boolean", () => {
    assert(
      order.hasOwnProperty("extraCheese"),
      "make sure to add extraCheese to the order object!"
    );
    assert.equal(typeof order.extraCheese, "boolean");
  });
  it("sould have a deliveryInstructions string", () => {
    assert(
      order.hasOwnProperty("deliveryInstructions"),
      "make sure to add deliveryInstructions to the order object!"
    );
    assert.equal(typeof order.deliveryInstructions, "string");
  });
});

describe.only("order", () => {
  describe("1 pizzas", () => {
    const order = {
      pizzas: 1,
      extraCheese: true,
      deliveryInstructions: "Round the back, please!",
    };

    it("should return the number of pizzas", () => {
      assert.equal(numberOfPizzas(order), order.pizzas);
    });
  });

  describe("5 pizzas", () => {
    const order = {
      pizzas: 5,
      extraCheese: false,
      deliveryInstructions: "Call when you arrive",
    };

    it("should return the number of pizzas", () => {
      assert.equal(numberOfPizzas(order), order.pizzas);
    });
  });
});
