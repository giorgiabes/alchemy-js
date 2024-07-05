const { assert } = require("chai");
const array = require("../src/arrays/array");

describe("array", () => {
  it("should be an array of length 3", () => {
    assert.equal(array.length, 3);
  });

  it("should contain elements 1,2,3", () => {
    assert.sameMembers(array, [1, 2, 3]);
  });
});
