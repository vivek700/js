class Character {
  #health = 100;
  static count = 0;
  constructor(name) {
    this.name = name;
    Character.incrementCount();
  }

  static incrementCount() {
    Character.count++;
  }

  static getCount() {
    return Character.count;
  }

  get health() {
    return this.#health;
  }

  set health(value) {
    this.#health = Math.max(0, value);
  }
  takeDamage(amount) {
    this.health -= amount;
  }

  get isAlive() {
    return this.health > 0;
  }

  getStatus() {
    return `${this.name} has Health ${this.#health} and is ${this.isAlive ? "Alive" : "Dead"}`;
  }
}

class Hero extends Character {
  constructor(name) {
    super(name);
    this.inventory = [];
  }
  pickUpItem(item) {
    this.inventory.push(item);
  }
  getItems() {
    return `${this.name} has the following items: ${this.inventory.join(", ")}`;
  }
}

class Villain extends Character {
  constructor(name, threat) {
    super(name);
    this.threat = threat;
  }
  getThreat() {
    return this.threat;
  }
}

// Example Usage
const merlin = new Hero("Merlin");
const medea = new Hero("Medea");
const troll = new Villain("Troll", "I will destroy your soul!");

console.log(troll.getThreat()); // I will destroy your soul!
merlin.pickUpItem("Sword");
merlin.takeDamage(15);
medea.takeDamage(5);
medea.pickUpItem("Shield");
console.log(merlin.getItems()); // Merlin has the following items: Sword
console.log(medea.getItems()); // Medea has the following items: Shield
troll.takeDamage(101);
console.log(troll.getStatus()); //Troll has 0 health and is dead.
console.log(medea.getStatus()); // Medea has 95 health and is alive.`
console.log(merlin.getStatus()); // Merlin has 85 health and is alive.
console.log(`Total characters created: ${Character.getCount()} `); // Total characters created: 3
