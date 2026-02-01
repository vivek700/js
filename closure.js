function scorePoint(playerName) {
  let score = 0;
  return {
    displayScore: function () {
      console.log(`${playerName} has ${score} points.`);
    },
    incrementScore: function () {
      score++;
    },
    decrementScore: function () {
      score--;
    },
  };
}

const player1 = scorePoint("vivek");
const player2 = scorePoint("john");
player1.displayScore();
player2.displayScore();

player1.incrementScore();
player1.incrementScore();
player1.incrementScore();
player1.incrementScore();
player1.incrementScore();

player2.incrementScore();
player2.incrementScore();
player2.incrementScore();
player2.incrementScore();
player2.incrementScore();
player2.incrementScore();
player2.incrementScore();
player2.incrementScore();

player1.displayScore();
player2.displayScore();

player1.decrementScore();
player2.decrementScore();

player1.displayScore();
player2.displayScore();
