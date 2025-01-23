const angka: number = 10;
console.log(
  angka % 2 === 0 ? `${angka} bolangan prima` : `${angka} bukan bilangan prima`
);

// 2. Check Prime Number
const num: number = 10;
let isPrime: boolean = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; num < i; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime);

// const angka2:number = 5;
// const result:number = (angka2*(angka2+1))/2
// console.log(result)

const angka2: number = 6;
let sum: number = 0;
let message: string = "";

for (let index = 1; index < angka2; index++) {
  sum += index;

  if (index === angka2) {
    message += index + " ";
  } else {
    message += index + " + ";
  }
}

console.log(sum);
console.log(message + "=" + sum);

const angka3: number = 6;
let kum: number = 1;
let pesan: string = "";

for (let index = angka3; index >= 1; index--) {
  kum *= index;

  if (index === angka3) {
    pesan += index + " ";
  } else {
    pesan += index + " + ";
  }
}

console.log(kum);
console.log(pesan + "=" + kum);

const n: number = 15;

let a: number = 0;
let b: number = 1;

for (let i = 0; i < n; i++) {
  let hasil: number = a + b;

  a = b;
  b = hasil;
}

console.log(a);
