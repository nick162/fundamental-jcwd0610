//Versi Js
const message = "hello world";
//Type Scrpt
const message2 = "Hello";
const angka = 1315431;
const coba = 424535435;
// ================= STRING BUILD IN METHOD
// Mengubah string menjadi huruf kecil
const nama = "BuBdi";
const nama1 = "Indro";
const nama2 = "Dono";
const nama3 = "Kasino";
console.log(nama.toLocaleLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("B", "F"));
console.log(nama.replaceAll("B", "F"));
console.log(nama.split(""));
console.log(nama.concat(" ").concat(nama1).concat(" ").concat(nama2));
console.log(nama1 + " " + nama3);
console.log(nama1.slice(0, 3));
// ======================= TEMPLATE LITERAL
const name4 = "Shinta";
const greeting = `Welcome ${name4}`;
console.log(greeting);
// ======================= NUMBER BUILT IN METHOD
const nomor = "20000";
console.log(Number(nomor));
console.log(typeof Number(nomor));
console.log(typeof nomor);
console.log(parseInt(nomor));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
export {};
