function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toLowerCase()) >= 0) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

module.exports = countVowels;
