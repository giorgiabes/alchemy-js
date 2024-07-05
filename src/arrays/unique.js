function unique(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

module.exports = unique;
