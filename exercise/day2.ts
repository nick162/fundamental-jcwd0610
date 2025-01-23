//1. Check odd or even
let bilangan: number = 25;

if (bilangan % 2 === 0) {
  console.log(" bilangan is an even number");
} else {
  console.log(" bilangan is a odd number");
}

//2.  check prime number

// let bil: number = 3;

// if (bil % 2 !== 0) {
//   console.log(" This is a prime number");
// } else {
//   console.log(" This is not a prime number");
// }

let n = 17;
let isPrime = true;

if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
    }
  }
}

console.log(isPrime ? `${n} is a prime` : `${n} is not a prime`);

// 3. Menambahkan angka dari 1 to N

let hasil: number = 0;

for (let i = 1; i <= 5; i++) {
  hasil += i;
}

console.log(hasil);

//4. Factorial number

let angka: number = 1;

for (let i = 1; i <= 4; i++) {
  angka = angka * i;
}

console.log(angka);

let angka9: number = 1;
let coba: number = 4;

for (let i = coba; coba > 1; coba--) {
  console.log((angka9 *= i));
}

console.log(angka9);

//5. bilangan fibbonanci

// function fib(n) {
//     if (n == 0)
//       return 0;
//     if (n <= 2)
//       return 1;
//     return fib(n-1) + fib(n-2);
//   }

// console.log(fib(15))

// Bilangan fibonannci adalah bilang yang dijumlahkan berurut
// 0 1 2 3 4 = dijumlah 0 + 1 = 1 => 1 + 2 = 3 dstr,

let m: number = 15;

let a = 0;
let b: number = 1;
let fib = 0;

//1. Kondisi pertama jika n = 0, maka hasilnya 0
if (m === 0) {
  console.log(`ini adalah 0`);
  //2. Kondisi kedua, jika n = 1 maka hasilnya 1, karena 0 + 1
} else if (m === 1) {
  console.log(` bilangan ${(fib = 1)}`);
} else {
  for (let i = 2; i <= m; i++) {
    // kita akan mendeklarasikan rumus karena bilangan fibonanci ditambah dengan angka setelahnya, maka
    // fib = a + b
    // a = b
    // b = fib

    fib = a + b;
    a = b;
    b = fib;
  }
}

console.log(`bilangan fibbonanci dari ${m} adalah ${fib}`);
