class Gamer {
  constructor(name, score) {
    ((this.name = name), (this.score = score));
  }
  incrementScore() {
    this.score++;
  }
}

const dave = new Gamer("Dave", 0);
dave.incrementScore();
console.log(dave);
