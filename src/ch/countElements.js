function countElements(elements) {
  const result = {};
  for (let i = 0; i < elements.length; i++) {
    if (result[elements[i]]) {
      result[elements[i]] += 1;
    } else {
      result[elements[i]] = 1;
    }
  }
  return result;
}

module.exports = countElements;
