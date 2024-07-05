const startsWithX = require("../src/string-manipulation/startsWithX");
const endsWithW = require("../src/string-manipulation/endsWithX");
const { assert } = require("chai");

describe("startsWithX", () => {
  it("should return true for a string starting with a lower case x", () => {
    assert.equal(startsWithX("x"), true);
    assert.equal(startsWithX("xpizza"), true);
  });

  it("should return true for a string starting with an upper case x", () => {
    assert.equal(startsWithX("X"), true);
    assert.equal(startsWithX("Xpizza"), true);
  });

  it("should return false for a string not starting with x", () => {
    assert.equal(startsWithX("pizza"), false);
    assert.equal(startsWithX("zyx"), false);
  });
});

describe("endsWithX", () => {
  it("should return true for a string ending with a lower case x", () => {
    assert.equal(endsWithW("pizzax"), true);
  });

  it("should return true for a string ending with aa upper case X", () => {
    assert.equal(endsWithW("pizzaX"), true);
  });

  it("should return false for a string not ending withx", () => {
    assert.equal(endsWithW("pizza"), false);
  });
});
