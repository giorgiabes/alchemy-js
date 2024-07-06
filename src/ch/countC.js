function countC(str) {
  let cCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "c") {
      cCount += 1;
    }
  }
  return cCount;
}

module.exports = countC;
