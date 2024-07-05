const { assert } = require("chai");
const array = require("../src/arrays/array");
const hasOne = require("../src/arrays/hasOne");

describe("array", () => {
  it("should be an array of length 3", () => {
    assert.equal(array.length, 3);
  });

  it("should contain elements 1,2,3", () => {
    assert.sameMembers(array, [1, 2, 3]);
  });
});

describe("hasOne", () => {
  it("should handle arrays with 1 in it", () => {
    assert(hasOne([1]));
    assert(hasOne([1, 2, 3]));
    assert(hasOne([3, 1, 2]));
    assert(hasOne([3, 2, 1]));
    assert(hasOne([1, 1]));
    assert(hasOne([1, 1, 1]));
  });

  it("should handle arrays without 1 in it", () => {
    assert(!hasOne([]));
    assert(!hasOne([2, 3, 4]));
    assert(!hasOne([6, 7, 8, 9, 10, 11]));
  });
});
