function sumTogether(arr1, arr2) {
  const sum = [];
  for (let i = 0; i < arr1.length; i++) {
    sum.push(arr1[i] + arr2[i]);
  }
  return sum;
}

module.exports = sumTogether;
