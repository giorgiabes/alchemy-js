function endsWithX(string) {
  const lastChar = string.charAt(string.length - 1).toLowerCase();
  if (lastChar === "x") {
    return true;
  }
  return false;
}

module.exports = endsWithX;
