const { assert } = require("chai");
const array = require("../src/arrays/array");
const hasOne = require("../src/arrays/hasOne");
const sumEven = require("../src/arrays/sumEven");
const unique = require("../src/arrays/unique");
const addOne = require("../src/arrays/addOne");

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

describe("unique", () => {
  it("should return an array with all unique elements", () => {
    assert.sameMembers(unique([1, 2, 3]), [1, 2, 3]);
  });

  it("should handle an array with a few duplicates", () => {
    const original = [1, 2, 2, 3, 4, 3];
    assert.sameMembers(unique(original), [1, 2, 3, 4]);
    assert.equal(original.length, 6, "the original array should be unmodified");
  });

  it("should handle a larger array with only duplicates", () => {
    const original = [1, 1, 1, 1, 1, 1, 1];
    assert.sameMembers(unique(original), [1]);
    assert.equal(original.length, 7, "the original array should be unmodified");
  });
});

describe("addOne", () => {
  it("should handle a single element array", () => {
    const array = [1];
    const returned = addOne(array);
    assert.equal(
      returned,
      undefined,
      "the function should not return anything"
    );
    assert.sameMembers(array, [2]);
  });

  it("should handle an array with a few sequential elements", () => {
    const array = [1, 2, 3];
    const returned = addOne(array);
    assert.equal(
      returned,
      undefined,
      "the function should not return anything"
    );
    assert.sameMembers(array, [2, 3, 4]);
  });

  it("should handle a larger array", () => {
    const array = [9, 12, 14, 16, 19];
    const returned = addOne(array);
    assert.equal(
      returned,
      undefined,
      "the function should not return anything"
    );
    assert.sameMembers(array, [10, 13, 15, 17, 20]);
  });
});
