// No 1.
const angka: number = 9;
const limit: number = 10;
for (let index = 1; index <= limit; index++) {
  console.log(`${angka} x ${index}`);
}

// No 2
// CARA 1

// index => dimulai dari 0
// length => dimulai dari 1

const kata: string = "madam";
let result: string = "";

for (let i = kata.length - 1; i >= 0; i--) {
  result += kata[i];
}

console.log(result);

if (kata === result) {
  console.log(" kata yang anda masukan adalah polindrome");
} else {
  console.log(`${kata} yang anda masukan bukan string kosong`);
}

// Cara 2

const kata2: string = "kodok";
const isPolindrome: boolean = kata2 === kata2.split("").reverse().join("");
console.log(isPolindrome);
