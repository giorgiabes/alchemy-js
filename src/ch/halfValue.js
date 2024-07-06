function halfValue(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(Math.ceil(numbers[i] / 2));
    } else {
      newNumbers.push(numbers[i] / 2);
    }
  }
  return newNumbers;
}

module.exports = halfValue;
