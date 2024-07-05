const { assert } = require("chai");
const array = require("../src/arrays/array");
const hasOne = require("../src/arrays/hasOne");
const sumEven = require("../src/arrays/sumEven");

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

describe("sumEven", () => {
  it("should handle a single element array", () => {
    assert.equal(sumEven([2]), 2);
  });

  it("should handle an array with a few sequential elements", () => {
    assert.equal(sumEven([1, 2, 3, 4, 5]), 6);
  });

  it("should handle a larger array", () => {
    assert.equal(sumEven([9, 12, 14, 16, 19]), 42);
  });
});
