function willEat(hasPizza, hasDonuts, hasCookies) {
  if (hasPizza || hasDonuts || hasCookies) {
    return true;
  }
  return false;
}

module.exports = willEat;
