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

// NO 3
const cm: number = 100_000;
const km: number = cm / 100_000;
console.log(`${km} km`);

// NO 4
const angka4: number = 10_000;
const result4: string = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
}).format(angka4);

console.log(result4);

// NO 5
const kata3: string = "hello world";
const search: string = "ell";
const result5: string = kata3.replace(search, "");
console.log(result5);

// NO 6
const inputString: string = "hello world";
let words = inputString.split(" ");
console.log(words);
console.log(words[0]);
console.log(words.length);

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

console.log(words[0].substring(1, 2));
console.log(words.join(" "));

// NO 7
const inputString2: string = "The QuIck BroWn FoX";
let swappedString: string = "";

for (let i = 0; i < inputString2.length; i++) {
  if (inputString2[i] === inputString2[i].toUpperCase()) {
    swappedString += inputString2[i].toLowerCase();
  } else {
    swappedString += inputString2[i].toUpperCase();
  }
}

console.log(swappedString);

// NO 8
const num1: number = 10;
const num2: number = 27;
console.log(num1 > num2 ? num1 : num2);

// NO 9
const num3: number = 42;
const num4: number = 27;
const num5: number = 18;

const smallest: number = Math.min(num3, num4, num5);
const largest: number = Math.max(num3, num4, num5);
const midd: number = num3 + num4 + num5 - smallest - largest;
console.log(`${smallest} ${midd} ${largest}`);

// NO 10

const input: any = "test";

if (typeof input === "string") {
  console.log(1);
} else if (typeof input == "number") {
  console.log(2);
} else {
  console.log(3);
}

// NO 11
const inputString4: string = "An apple a day keeps".toLowerCase();
const replaceWord: string = "a";
let modifyString: string = "";

for (let index = 0; index < inputString4.length; index++) {
  if (inputString4[index] === replaceWord) {
    modifyString += "*";
  } else {
    modifyString += inputString4[index];
  }
}

console.log(modifyString);
