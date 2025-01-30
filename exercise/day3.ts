//1.
let input: number = 9;
const limit: number = 10;

for (let i = 1; i <= limit; i++) {
  console.log(`${input} x ${i}`);
}

//2.
let str: string = "kotak";
const balik: string = str.split("").reverse().join("");

if (str === balik) {
  console.log("true");
} else {
  console.log("false");
}

//3.
let cm: number = 1;
let km: number = 100_000;

if (typeof Number) {
  console.log(cm / km);
} else {
  console.log("angka yang anda masukan bukan nomor");
}

//4.

let angka: number = 10000;

if (typeof Number(angka)) {
  let idr: string = angka.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  console.log(idr);
}

//5.
let huruf: string = "hello world";
let search: string = huruf.slice(1, 4);
let output: string = huruf.replace(search, "");
console.log(output);

let i: number = 0;

//6.
let huruf2: string = "hello world";

for (let i = 0; i <= huruf2.length; i++) {
  if (huruf2[i] !== huruf2.toLocaleLowerCase() && i < 1) {
    let huruf3: string = huruf2[i].toUpperCase();
    //  let huruf4:string = huruf2.splice(0,"")
    //  console.log(huruf4)
  }
}

// function capitalize_Words(str)
// {
//  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// console.log(capitalize_Words('js string exercises'));

//Jika yang dia temukan itu spaci maka huruf setelahnya adalah capital

//5.
