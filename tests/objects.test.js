const { assert } = require("chai");
const order = require("../src/objects/order");
const numberOfPizzas = require("../src/objects/numberOfPizzas");
const numberOfPizzasTotal = require("../src/objects/numberOfPizzasTotal");
const ORDER_TYPES = require("../src/objects/orderTypes");
const numberOfPizzasEnum = require("../src/objects/numberOfPizzasEnum");
const numberOfKeys = require("../src/objects/numberOfKeys");

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

describe("order", () => {
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

describe("numberOfPizzasTotal", () => {
  describe("a single order", () => {
    const orders = [{ pizzas: 3 }];

    it("should return the number of pizzas", () => {
      assert.equal(numberOfPizzasTotal(orders), 3);
    });
  });

  describe("many orders", () => {
    const orders = [{ pizzas: 3 }, { pizzas: 5 }, { pizzas: 10 }];

    it("should return the number of pizzas", () => {
      assert.equal(numberOfPizzasTotal(orders), 18);
    });
  });
});

describe("ORDER_TYPES", () => {
  it("should have at least three keys", () => {
    const keys = Object.keys(ORDER_TYPES);
    assert.isAbove(keys.length, 2);
  });

  it("should have all keys in upper snake case", () => {
    const keys = Object.keys(ORDER_TYPES);
    keys.forEach((key) => {
      assert(
        new RegExp(/^([A-Z]*_?)*$/).test(key),
        "the key should be in UPPER_SNAKE_CASE"
      );
    });
  });

  it("should have a PIZZA key with a value of 0", () => {
    assert.equal(ORDER_TYPES.PIZZA, 0);
  });

  it("all keys should have numerical values", () => {
    const values = Object.values(ORDER_TYPES);
    values.forEach((value) => {
      assert.equal(typeof value, "number", "make sure each value is a number!");
    });
  });

  it("no key should have the same value", () => {
    const values = Object.values(ORDER_TYPES);
    values.forEach((value, index) => {
      assert(
        values.indexOf(value) === index,
        `Each value must be unique, found two ${value} values!`
      );
    });
  });
});

describe("numberOfPizzasEnum", () => {
  describe("just pizza", () => {
    const orders = [
      { pizzas: 3, type: ORDER_TYPES.PIZZA, extraCheese: true },
      { pizzas: 5, type: ORDER_TYPES.PIZZA, extraCheese: false },
      { pizzas: 10, type: ORDER_TYPES.PIZZA, extraCheese: true },
    ];

    it("should return the number of pizzas", () => {
      assert.equal(numberOfPizzasEnum(orders), 18);
    });
  });

  const keys = Object.keys(ORDER_TYPES);
  describe(keys.join(", "), () => {
    const orders = keys.reduce(
      (arr, key) => {
        return arr.concat({
          type: key,
        });
      },
      [{ pizzas: 3, type: ORDER_TYPES.PIZZA }]
    );

    it("should return the number of pizzas", () => {
      assert.equal(numberOfPizzasEnum(orders), 3);
    });
  });
});

describe("numberOfKeys", () => {
  it("should handle an object with 1 property", () => {
    assert.equal(numberOfKeys({ prop: 1 }), 1);
  });

  it("should handle an object with 3 properties", () => {
    assert.equal(numberOfKeys({ a: 1, b: 2, c: 3 }), 3);
  });
});
