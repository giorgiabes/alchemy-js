const { assert } = require("chai");
const halfValue = require("../src/ch/halfValue");

const modifyErr =
  "Whoops! Create a new array, do not modify the original array.";
const compare = (a, b) => JSON.stringify(a) === JSON.stringify(b);

describe.only("halfValue", () => {
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
