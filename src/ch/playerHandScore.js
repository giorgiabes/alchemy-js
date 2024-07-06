function playerHandScore(hand) {
  const CARDS = {
    K: 4,
    Q: 3,
    J: 2,
  };

  let score = 0;
  for (let i = 0; i < hand.length; i++) {
    score += CARDS[hand[i]];
  }
  return score;
}

module.exports = playerHandScore;
