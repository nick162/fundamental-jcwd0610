//Versi Js
const message = "hello world";

//Type Scrpt
const message2: string = "Hello";
const angka: number = 1315431;
const coba: string | number = 424535435;

// ================= STRING BUILD IN METHOD

// Mengubah string menjadi huruf kecil

const nama: string = "BuBdi";
const nama1: string = "Indro";
const nama2: string = "Dono";
const nama3: string = "Kasino";

console.log(nama.toLocaleLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("B", "F"));
console.log(nama.replaceAll("B", "F"));
console.log(nama.split(""));
console.log(nama.concat(" ").concat(nama1).concat(" ").concat(nama2));
console.log(nama1 + " " + nama3);
console.log(nama1.slice(0, 3));

// ======================= TEMPLATE LITERAL
const name4: string = "Shinta";
const greeting: string = `Welcome ${name4}`;
console.log(greeting);

// ======================= NUMBER BUILT IN METHOD
const nomor: string = "20000";
console.log(Number(nomor));
console.log(typeof Number(nomor));
console.log(typeof nomor);
console.log(parseInt(nomor));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// ======================= STRING CONVERSION
const nomor2: number = 5657678;
console.log(String(nomor2));
console.log(nomor2.toString());

// ======================= BOOLEAN CONVERSION (SEMUA HASIL AKAN TRUE KECUALI 0 FALSE)
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-32));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("hghk"));
console.log(Boolean("0"));
console.log(Boolean("false"));

// ======================= DATE
const now: Date = new Date();
console.log(now);

//Get Method
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getTime());

//Set Method
now.setDate(10);
now.setMonth(2); // JS menghitung mulai dari 0 untuk januari, sehingga angka 2 akan menjadi bulan ke 3 atau march
now.setFullYear(10);

console.log(now);

// ======================= BASIC OPERATOR
/*
    + -> pertambahan
    - -> pengurangan
    * -> perkalian
    / -> pembagian
    % -> module (sisa bagi)
    ** -> Pangkat

*/

console.log(1 + 1);
console.log(3 - 1);
console.log(6 * 2);
console.log(14 / 2);
console.log(9 % 2);
console.log(2 ** 3);

// ======================= MODIFY IN PLACE
// n = n + 2
let n: number = 4;
n += 2;
console.log(n);

// ======================= INCREMENT & DECREMENT
let counter: number = 1;
// counter++
counter--;
console.log(counter);

// ======================= POSTFIX(DITAMPILKAN DULU, BARU DITAMBAHKAN DENGAN 1) DAN PREFIX (DITAMBAHKAN DULU, BARU DITAMPILKAN)
let counter2: number = 2;
// console.log(counter2++) // postfix
console.log(++counter2); //prefix

// ======================= COMPARATION OPERATOR

/* 
    ==
    ===
    < KURANG DARI
    > LEBIH DARI
    <= KURANG DARI SAMA DENGAN
    >= LEBIH DARI SAMA DENGAN
    != TIDAK SAMA DENGAN
*/

console.log(4 < 5);
console.log(4 < 2);
console.log(5 > 4);
console.log(4 > 5);
console.log(5 <= 5);

// ======================= PSEUDOCODE (STEP BY STEP CODE YANG KITA TULIS SENDIRI)

// ======================= Math.ceil (membulatkan angka ke atas)
console.log(Math.ceil(4.2));

// ======================= Math.floor(membulatkan angka ke kebawah)
console.log(Math.floor(4.2));

// ======================= Math.round (membulatkan angka ke bilangan bulan terdekat)
console.log(Math.round(4.7));
console.log(Math.round(4.2));

// ======================= Math.max (mengembalikan angka terbesar dari sekumpulan angka)
console.log(Math.max(10, 25, 60, 34, 54));

// ======================= Math.min (mengembalikan angka terkecil)
console.log(Math.min(10, 25, 60, 34, 54));

// ======================= Math.abs (menghilangkan tanda negatif)
console.log(Math.abs(-3));

// ======================= Math.random (menghasilkan angka acak dari 0 dan 1)
console.log(Math.random());
