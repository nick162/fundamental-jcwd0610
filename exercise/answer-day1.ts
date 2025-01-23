// Write a code to find area of rectangle.
// Example : length = 5, width = 3 Output = 15
const length = 5;
const width = 3;
const area = length * width;
console.log(area);

// Write a code to find perimeter of rectangle.
// Example : length = 5, width = 3 Output : 16
const panjang = 5;
const lebar = 3;
const keliling = 2 * (panjang + lebar);
console.log(keliling);

//Write a code to find diameter, circumference and area of a circle.
//Example : radius = 5 Output : diameter = 10, circumference = 31.4159, area = 78.539
const radius: number = 14; // input
const diameter: number = 2 * radius;
const circumference: number = diameter * 3.14;
const keseluruhan: number = 3.14 * radius * radius;

console.log(
  `diameter ${diameter} circumference ${circumference} keseluruhan ${keseluruhan}`
);

//Write a code to find angles of triangle if two angles are given.
// Example : a = 80, b = 65 Output : 35
const a: number = 80;
const b: number = 65;
const c: number = 180 - (a + b);
console.log(c);

//Write a code to convert days to years, months and days Example : 400 days → 1 year, 1 month, 5 days
const hari: number = 400;
const tahun: number = Math.floor(hari / 365);
const bulan: number = Math.floor((hari % 365) / 30);
const tanggal: number = Math.floor((hari % 365) / 30);
console.log(`${tahun} tahun, ${bulan} bulan, ${tanggal} hari`);

// no 6
const date1: Date = new Date();
const date2: Date = new Date();
const bedatanggal: number = Math.abs(date1.getTime() - date2.getTime());
const bedaHari: number = bedatanggal / (1000 * 3600 * 24);
console.log(bedaHari);
