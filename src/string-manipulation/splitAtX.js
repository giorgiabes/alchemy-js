function splitAtX(string) {
  const xIndex = string.indexOf("x");
  const firstHalf = string.slice(0, xIndex);
  const secondHalf = string.slice(xIndex + 1);
  if (firstHalf.length > secondHalf.length) {
    return firstHalf;
  }
  return secondHalf;
}

module.exports = splitAtX;
