function isAllX(string) {
  const lowerString = string.toLowerCase();
  const containsAllX = true;
  for (let i = 0; i < lowerString.length; i++) {
    if (lowerString[i] !== "x") {
      return (containAllX = false);
    }
  }
  return containsAllX;
}

isAllX("Apple");

module.exports = isAllX;
