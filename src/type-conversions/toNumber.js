function toNumber(string) {
  if (Number(string)) {
    return Number(string);
  }
  return 0;
}

module.exports = toNumber;
