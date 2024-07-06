const { assert } = require("chai");
const halfValue = require("../src/ch/halfValue");
const countC = require("../src/ch/countC");
const countVowels = require("../src/ch/countVowels");

const modifyErr =
  "Whoops! Create a new array, do not modify the original array.";
const compare = (a, b) => JSON.stringify(a) === JSON.stringify(b);

describe("halfValue", () => {
  it("should return an empty array", () => {
    const arr = [];
    const actual = halfValue(arr);
    assert(compare(arr, []), modifyErr);
    assert.sameMembers(actual, []);
  });

  it("should return an array of even value", () => {
    const arr = [2, 4, 6, 8];
    const actual = halfValue(arr);
    assert(compare(arr, [2, 4, 6, 8]), modifyErr);
    assert.sameOrderedMembers(actual, [1, 2, 3, 4]);
  });

  it("should return an array of odd values", () => {
    const arr = [11, 13, 15, 17];
    const actual = halfValue(arr);
    assert(compare(arr, [11, 13, 15, 17]), modifyErr);
    assert.sameOrderedMembers(actual, [6, 7, 8, 9]);
  });
});

describe("countC", () => {
  it("should return zero", () => {
    assert.equal(countC("pizza"), 0);
  });

  it("should handle lowercase c", () => {
    assert.equal(countC("character"), 2);
  });

  it("should handle uppercase c", () => {
    assert.equal(countC("Circus"), 2);
  });
});

describe("countVowels", () => {
  it("should return zero", () => {
    assert.equal(countVowels("bczx"), 0);
  });

  it("should count all vowels", () => {
    assert.equal(countVowels("Igloo"), 3);
  });

  describe("uppercase vowels", () => {
    it("should count all uppercase vowels", () => {
      assert.equal(countVowels("AEIOU"), 5);
    });

    it("should only count vowels", () => {
      assert.equal(countVowels("APPLE"), 2);
    });
  });

  describe("lowercase vowels", () => {
    it("should count all lowercase vowels", () => {
      assert.equal(countVowels("aeiou"), 5);
    });

    it("should only count vowels", () => {
      assert.equal(countVowels("apple"), 2);
    });
  });
});
