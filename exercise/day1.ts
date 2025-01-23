/* 
1. Write a code to find area of rectangle
example: length = 5, width = 3 output 15
*/

let panjang: number = 5;
let lebar: number = 3;
let luas: number = panjang * lebar;

console.log(luas);

/* 
2. Write a code to find area of rectangle
example: length = 5, width = 3 output 16
*/

const keliling: number = 2 * (panjang + lebar);
console.log(keliling);

/* 3
radius = 5
d = 10, circumferebce = 31.4159, area = 78.538

*/

let r: number = 5;

let phi: number = 3.14;

let d = r * 2;

console.log(d);

let l = d * Math.PI;

console.log(l);

let k = Math.PI * Math.pow(r, 2);

console.log(k);

/* 4
jika a = 80 dan b = 65
maka output = 35


*/

/* 5. 
 write a code to convert days to years, months and days ( noted: 1 year: 365, 1 month: 30 days)
 example 400 days -> 1 year, 1 month, 5 days
 example 366 days ->  1 year, o month, 1 day
*/

//1. Deklarasikan Variable
let y: number = 365;
let m: number = 30;
let h: number = 1;
let o: number = 600;

/*
// 2. Kita cari berapa tahun terlebih dahulu dan sisa hari menggunakan modulus
let hasilTahun: number = o % y;

// 3. Setelah kita dapatkan tahunnya kita bulatkan dengan fungsi Math.floor/ Math.ceil
let th: number = Math.floor(o / y);

//4. Kita jadikan sisa hari(modulus) dijadikan bulan dengan dibagi 30, setelah itu dibulatkan dengan Math.floor/Math.ceil
let hasilBulan: number = Math.floor(hasilTahun / m);
let hasilhari: number = hasilTahun % 30;
*/

let tahun: number = Math.floor(o / y);
// console.log(tahun)
let bulan: number = Math.floor((o % y) / m);
// console.log(bulan)
let hari: number = (o % y) % m;
// console.log(hari)

console.log(
  tahun +
    " " +
    "tahun" +
    " " +
    bulan +
    " " +
    "bulan" +
    " " +
    hari +
    " " +
    "hari"
);

//6. ubah menjadi tahun terlebih dahulu

//6.

//1. dapatkan newdatenya

// let dateSkrg: Date = new Date("2022 - 1 - 23");

// let dateBesok: Date = new Date("2022 - 1 - 22");

// let te = (dateSkrg.getTime()/(60*60*24*1000));
// let ta = (dateBesok.getTime()/(60*60*24*1000));
// console.log(Math.abs(te-ta))

//2. Set Methodnya
// dateSkrg.setFullYear(10);
// dateSkrg.setMonth(10);
// dateSkrg.setDate(8);

// dateBesok.setFullYear(10);
// dateBesok.setMonth(10);
// dateBesok.setDate(10);

// const between: any | number | bigint = dateSkrg - dateBesok;

// console.log(between);

const date1: Date = new Date("2025-10-01");
const daete2: Date = new Date("2025-01-01");

const bedaTanggal = Math.abs(date1.getTime() - daete2.getTime());
const bedaHari = bedaTanggal / (1000 * 3600 * 24);
console.log(bedaHari);
