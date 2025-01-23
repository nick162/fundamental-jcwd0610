/*
1. Write a code to find area of rectangle
example: length = 5, width = 3 output 15
*/
let panjang = 5;
let lebar = 3;
let luas = panjang * lebar;
console.log(luas++);
/*
1. Write a code to find area of rectangle
example: length = 5, width = 3 output 15
*/
console.log(luas);
/* 3
radius = 5
d = 10, circumferebce = 31.4159, area = 78.538

*/
let r = 5;
let phi = 3.14;
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
/*
 write a code to convert days to years, months and days ( noted: 1 year: 365, 1 month: 30 days)
 example 400 days -> 1 year, 1 month, 5 days
 example 366 days ->  1 year, o month, 1 day
*/
//1. Dapatkan jumlah hari
let y = 365;
let m = 30;
let h = 1;
let o = 400;
// 2. Kita cari berapa tahun terlebih dahulu dan hari menggunakan modulus
let hasilTahun = o % y;
// 3. Setelah kita dapatkan tahunnya kita bulatkan dengan fungsi Math.floor/ Math.ceil
let th = Math.floor(o / 360);
//4. Kita jadikan sisa hari(modulus) dijadikan bulan dengan dibagi 30, setelah itu dibulatkan dengan Math.floor/Math.ceil
let hasilBulan = Math.floor(hasilTahun / m);
let hasilhari = hasilTahun % 30;
console.log(th +
    " " +
    "year" +
    " " +
    hasilBulan +
    " " +
    "bulan" +
    " " +
    hasilhari +
    " " +
    "hari");
//2. ubah menjadi tahun terlebih dahulu
//6.
//1. dapatkan newdatenya
let dateSkrg = new Date(2022 - 1 - 20);
let dateBesok = new Date(2022 - 1 - 22);
//2. Set Methodnya
// dateSkrg.setFullYear(10);
// dateSkrg.setMonth(10);
// dateSkrg.setDate(8);
// dateBesok.setFullYear(10);
// dateBesok.setMonth(10);
// dateBesok.setDate(10);
const between = dateSkrg - dateBesok;
console.log(between);
export {};
