class Employee {
  // name:string;
  // workingHours:[];
  constructor(public name: string, public workingHours: number) {
    this.name = name;
    this.workingHours = workingHours;
  }
}

class FullTimeEmployee extends Employee {
  constructor(name: string, workingHours: number) {
    super(name, workingHours);
  }

  calculateSalary() {
    let total = 0;
    let total2 = 0;
    let salary = 100_000;
    let salar2 = 75_000;

    if (this.workingHours === 6) {
      total += this.workingHours * 100_000;
    } else if (this.workingHours > 6) {
      total2 = salary * 6;
      total += (this.workingHours - 6) * salar2;
      total += total2;
    } else {
      return "Jam Kerja anda Kurang, Gaji Dipotong";
    }
    return total;
  }
}

const FullAndi = new FullTimeEmployee("Andi", 8);
console.log(FullAndi.calculateSalary());

class PartTimeEmployee extends Employee {
  constructor(name: string, workingHours: number) {
    super(name, workingHours);
  }

  claculateSalary() {
    let total = 0;
    let total2 = 0;
    let salary = 50_000;
    let salar2 = 30_000;

    if (this.workingHours === 6) {
      total += this.workingHours * 100_000;
    } else if (this.workingHours > 6) {
      total2 = salary * 6;
      total += (this.workingHours - 6) * salar2;
      total += total2;
    } else {
      return "Jam Kerja anda Kurang, Gaji Dipotong";
    }
    return total;
  }
}

const partAndi = new PartTimeEmployee("Andi", 8);
console.log(partAndi.claculateSalary());

// NO 2

class Player {
  name: string;
  health: number;
  power: number;

  constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  damage(power: number) {
    this.health -= power;
  }

  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    return `${this.name} (Health => ${this.health}, Power => ${this.power})`;
  }
}

class ShootingGame {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem(): { health: number; power: number } {
    let randomValue = Math.random();
    if (randomValue > 0.5) {
      return { health: 10, power: 0 };
    } else {
      return { health: 0, power: 10 };
    }
  }

  start() {
    let turn = 0;
    while (this.player1.health > 0 && this.player2.health > 0) {
      let attacker = turn % 2 === 0 ? this.player1 : this.player2;
      let defender = turn % 2 === 0 ? this.player2 : this.player1;

      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      let item = this.getRandomItem();
      console.log(item);
      console.log(attacker.useItem(item));

      console.log("After getting item:");
      attacker.showStatus();

      defender.damage(attacker.power);
      console.log(`${attacker.name} shoots ${defender.name}!`);

      turn++;
    }

    const winner =
      this.player1.health > 0 ? this.player1.name : this.player2.name;
    return `Game Over! Winner: ${winner}`;
  }
}

// Example usage:
const player1 = new Player("Alice");
console.log(player1.showStatus());
const player2 = new Player("Bob");
console.log(player2.showStatus());

const game = new ShootingGame(player1, player2);
console.log(game.start());
