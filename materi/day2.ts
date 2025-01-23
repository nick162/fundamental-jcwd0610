// ============== IF STATEMENT

/*
    if(condition){
        code block
    }
*/

const age: number = 19;

if (age >= 17) {
  console.log("anda bisa buat ktp");
}

// ============== ELSE STATEMENT

const age1: number = 16;

if (age1 >= 17) {
  console.log("anda bisa buat ktp");
} else {
  console.log("anda tidak bisa buat ktp");
}

// ============== ELSE IF STATEMENT

const grade: string = "C";

if (grade === "A") {
  console.log("Nilai anda bagus");
} else if (grade === "B") {
  console.log("Nilai anda bagus");
} else if (grade === "C") {
  console.log("Nilai Buruk");
} else {
  console.log(" Nilai tidak diketahui");
}

// ============== SWITCH CASE ( DIGUNAKAN UNTUK DECISION MAKING atau PILIHAN CUMAN 1)

const day: string = "senin";

switch (day) {
  case "senin":
    console.log("hari senin");
    break;
  case "selasa":
    console.log("hari selasa");
    break;
  case "rabu":
    console.log("hari rabu");
    break;
  default:
    console.log("hari tidak ditemkan");
    break;
}

// ============== LOGICAL OPERATOR
// && -> AND => Harus keduanya bernilai true
const umur: number = 19;
const punyaSim: Boolean = true;

if (umur >= 17 && punyaSim === true) {
  console.log("boleh bawa motor");
} else {
  console.log("tidak bisa bawa motor");
}

// || -> OR => salah satunya true
const car: string = "mercy";
if (car === "mercy" || car === "bmw") {
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}
// !  -> NOT => membalikan nilai boolean
const isSunny: Boolean = false;
const isRaining: Boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

/// ================= TERNARY OPERATOR
// SHORTCUT untuk if else condition
// condition ? true : false

const str: string = " Javascript ";

if (str === " Javascript ") {
  console.log("this is Javascript");
} else {
  console.log(" This is Typescript");
}

console.log(str === "Typescript" ? " Javascript" : " Not Javascrpt");

// jika kondisi lebih dari satu
console.log(
  str === " Javascript "
    ? "This is a Javascirpt"
    : str === "tyepscript"
    ? "this is typerscript"
    : "not found"
);

// ================== LOOP STATEMENT (PERULANGAN)
// RANGKAIAN INSTRUKSI YANG DILAKUKAN BERULANGKALI SAMPAI KONDISINYA TIDAK TERPENUHI
// TYPE : FOR LOOP, WHILE LOOP, DO WHILE LOOP

// FOR LOOP => Mempunyai 2 statement
// Statement 1 => Menginisialisasikan variable dari looping itu sendiri
// Statement 2 => Mendiine kondisi dari looping tersebt
// Statement 3 => Kode yang dieksekusi setiap iterasi

/*
    for(statement1;statement;statement3){
    code block yang akan diulang
    }
*/

for (let i = 0; i < 6; i++) {
  console.log("Hello World");
}

// WHILE LOOP =>
let i: number = 4;

while (i < 11) {
  console.log("Hellow World");
  i++;
}

// DO WHILE
/*
    do{} while()
*/
let count: number = 2;
do {
  console.log("Hello World");
  count++;
} while (count <= 5); // selama true lakukan hal diatas;

let sum: number = 0;

while (true) {
  console.log("sum :" + sum);

  if (sum >= 5) {
    break;
  } // Larangan break sebelum

  sum++;
}

// ========= CONTINUE
// MELAKUKAN SKIP PADA LOOPING

for (let i = 0; i < 5; i++) {
  if (i === 3 || i === 2) continue;
  console.log(i);
}
