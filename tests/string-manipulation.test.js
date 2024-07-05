const { assert } = require("chai");
const startsWithX = require("../src/string-manipulation/startsWithX");
const endsWithW = require("../src/string-manipulation/endsWithX");
const isAllX = require("../src/string-manipulation/isAllX");

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

describe("isAllX", () => {
  it("should return true for all lower case x", () => {
    assert.equal(isAllX("xxxx"), true);
  });

  it("should return true for all upper case x", () => {
    assert.equal(isAllX("X"), true);
  });

  it("should return true for a mix of x casing", () => {
    assert.equal(isAllX("XxXxXXXxx"), true);
  });

  it("should return false for non-x strings", () => {
    assert.equal(isAllX("Xxxpizza"), false);
    assert.equal(isAllX("xPizzaX"), false);
    assert.equal(isAllX("XxxxQxxxX"), false);
  });
});
