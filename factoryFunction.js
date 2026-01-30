function gamer(name, score) {
  return {
    name: name,
    score: score,
    incrementScore: function () {
      this.score++;
    },
  };
}

const vivek = gamer("Vivek", 5);
vivek.incrementScore();

console.log(vivek);

//object with 'Object Property Value Shorthand'
function gamer(name, score) {
  return {
    name,
    score,
    incrementScore() {
      this.score++;
    },
  };
}

const tanu = gamer("Tanu", 8);
tanu.incrementScore();

console.log(tanu);
