function startsWithX(string) {
  const firstChar = string.charAt(0).toLowerCase();
  if (firstChar === "x") {
    return true;
  }
  return false;
}

module.exports = startsWithX;
