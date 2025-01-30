// ==================> Array dan Function

// ===============>> ARRAY
const arr = [];
const arr2 = new Array();

// Array of String
const arr3: string[] = ["a", "b", "c"];
const arr3_2: string[] = new Array("a", "b", "c");

// Array of number
const arr4: number[] = [1, 2, 3, 4];
arr4[2] = 10;
console.log(arr3[2]);
console.log(arr4);

// Array of object
// key: value

// PascalCase
// Singular
// interface Student {
//   name: string;
//   email: string;
// }

interface Addres {
  street: string;
  city: string;
}

type Student = {
  name: string;
  email: string;
  hobby?: string;
  addres?: Addres;
  //   addres:{
  //     city:string;
  //     street:string
  //   }
};

const students: Student[] /*{name:string; email:string}[]*/ = [
  {
    name: "budi",
    email: "budi123@gmail.com",
    hobby: "Mancing",
    addres: {
      city: "jogja",
      street: "kaliurang",
    },
  },
  {
    name: "joko",
    email: "jok123@gmail.com",
  },
  {
    name: "jokowi",
    email: "jokowi123@gmail.com",
  },
];

// ======> FOR OF

const fruits = ["banana", "Apple", "Cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}

let inputs: number[] = [1, 2, 3, 4, 5, 6];
let input2: number = 0;

for (const input of inputs) {
  input2 += input;
}

console.log(input2);

// ========> FUNCTION
// 1. Function Declaration
/* 
    function namaFunction(parameter){
    // logic 
    }
*/

function square(angka: number) {
  return angka * angka;
}

const perkalian1: number = square(3);
const perkalian2: number = 2;

console.log(square(5));
console.log(square(4));
console.log(perkalian1);
console.log(perkalian2);

function apaSaja(angka1: number, angka2: number, angka3?: number) {
  if (!angka3) {
    return angka1 + angka2;
  }

  return angka1 * angka2 * angka3;
}

// 2. Function Expression
const square2 = function (angka: number) {
  return angka * angka;
};

console.log(square2(9));

// ==========> FUNCTION SCOPE

function greeting() {
  const hello = "hello";
  console.log(hello); // hasil tidak akan muncul sebelum di panggil fungisnya
}

// console.log(hello) tidak bisa dpanggil disini
greeting();

// ===========> PARAMETER DAN ARGUMENT
// Parameter ==>  variable yange memiliki value dari argument yang dimasukan
// Argument ==> Value yang dimasukan saat pemanggilan function

//      parameter
function greeting2(name: string) {
  const hello = "Hello";
  return hello + " " + name;
}

console.log(greeting2("siti"));
console.log(greeting2("kambing"));

// ===========> DEFAULT PARAMETER

function multiply(a: number, b: number = 2) {
  return a * b;
}

console.log(multiply(5, 7));
console.log(multiply(5));

// ===========> PARAMETER DAN ARGUMENT
// mewakili sisa argument ke dalam 1 variable parameter

function myFunc(a: number, b: number, ...manyArgs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyArgs);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);

// ===========> NESTED FUNCTION
// Fungsi yang berada dalam fungsi
// inner function bisa akses function dari outher function
// outer function tidak bisa akses function dari inner function

// outer function
function getMessage(firstName: string) {
  // inner function
  function sayHellow() {
    return "hello " + firstName + ",";
  }

  function welcomeMessage() {
    return " Welcome to purwadhika";
  }

  return sayHellow() + " " + welcomeMessage();
}
console.log(getMessage("Tuyul"));

// ===========> CLOSURE
// inner function selalu mempunyai akses ke variable dan parameter dari outer function
// bahkan setelah function tsb di return

// Outer Function
function greeting3(nama2: string) {
  const defaultMessage: string = "Hello";

  //inner function
  return function () {
    return defaultMessage + " " + nama2;
  };
}

const result = greeting3("Ucok");
console.log(result());

// ===========> RECRUSIVE
// funsgi yang memanggil dirinya sendiri

function countDown(number: number) {
  console.log(number);

  let nextNumber = number - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(10);

// ===========> ARROW FUNCTION
// shortcut untuk menuliskan function expression
const square4 = (number: number) => {
  return number * number;
};

const square5 = (number: number) => number * number;

// ===========> ARRAY BUILD-IN METHOD
// JOIN => Menggabungkan value yang ada dalam array ke dalam bentuk string, meskipun arraynya berupa number
const words: string[] = ["Hellow", "World"];
console.log(words.join(" "));

// POP => Menghilangkan value paling akhir
const words2: string[] = ["test", "hello", "world"];
console.log(words2);
words2.pop();
console.log(words);

const test: { name: string }[] = [
  {
    name: "Budi",
  },
  {
    name: "Jokowi",
  },
  {
    name: "Prabowo",
  },
];

test.pop();
console.log(test);

//SHIFT -> Menghilangkan value paling depan dalam array
const words3: string[] = ["test", "hello", "jomblo"];
words3.shift();
console.log(words3);
const resultJoin: string = words3.join(" "); // Kalo memakai join harus ditampung dalam variable baru
console.log(resultJoin);
console.log(words3);

//Unshift -> Menambahkan value ke urutan paling depan
const words5: string[] = ["Hello", "World"];
words5.unshift("test");
console.log(words5);

// PUSH => Menambahkan data baru ke paling akhir array
const words6: string[] = ["Hello", "World"];
words6.push("Purwadhika");
console.log(words6);

// CONCAT => Menggabungkan 2/ lebih array menjadi 1 array
const words7: string[] = ["Hello"];
const words8: string[] = ["World"];
const words9: string[] = ["halo"];
const words10: string[] = ["dunia"];

console.log(words7.concat(words8).concat(words9).concat(words10));

const mergeArray = [...words7, ...words8, ...words9];
console.log(mergeArray);

// SPLICE -> untuk menghapus, mengganti, atau menambahkan value pada sebuah array
// rumus -> splice(startIndex, brpa yang mau di delete, item)
const months: string[] = ["jan", "march", "april", "june"];
months.splice(1, 0, "feb"); // menambahkan data baru pada index
console.log(months);
months.splice(4, 1); // index ke brpa yang mau dihapus, dan berapa jumlahnya
console.log(months);
months.splice(3, 1, "may");
console.log(months);

// SLICE => mereturn array baru berdasarkan start index dan end index
// rumus => slice(startIndex, endIndex)
const fruits1: string[] = ["apple", "banana", "orange", "mango", "lemon"];
console.log(fruits1.slice(1, 4));
console.log(fruits1.slice(-4, -1));

// INDEXOF ==> mencari index dari value yang kita cari, kalo tidak ditemukan akan mereturn -1
const fruits2: string[] = ["apple", "banana", "orange", "mango", "lemon"];
console.log(fruits2.indexOf("mango"));
console.log(fruits2.indexOf("test"));

// SORT => Mengurutkan isi array berupa string atau number
const fruits3: string[] = ["mango", "apple", "banana", "orange", "lemon"];
console.log(fruits3.sort());

// sort number tanpa compare function
const points: number[] = [3, 4, 2, 5, 1];
const points2: number[] = [3, 4, 2, 5, 1, 10];
console.log(points.sort());
console.log(points2.sort()); // sort hanya membaca angka pertama, jadi jika ada angka 10 dia akan disana

// sort number compare function
console.log(points2.sort((a, b) => a - b)); // ascending
console.log(points2.sort((a, b) => b - a)); // descending

// REVERSE => membalikan urutan element dalam array
const points3: number[] = [7, 6, 9, 13, 8];
points3.reverse();
console.log(points3);

// MAP ==> melakukan looping pada array baru dan akan mereturn array baru
const points4: number[] = [1, 2, 3, 4, 5, 6];
const result2 = points4.map((parameter1, paramter2) => {
  // bisa meletakan kondisi disini
  // return parameter1/paramter2
  return parameter1 * 2; // paramater1 adalah nilai disetiap arraynya, sedangkan parameter2 adalah indexnya
});
console.log(result2);

// FOREACH => Melakukan pengulangan pada array, tapi tidak mereturn array baru
const fruits4: string[] = ["mango", "apple", "banana", "orange", "lemon"];
let container: string = "";
const result3 = fruits4.forEach((fruit, index) => {
  // console.log(fruit)

  // return fruit

  container += fruit + " ";
});
console.log(result3); //
console.log(container);
// Return disebuah function hanya bisa sekali, jika ada hal lain maka tidak akan dieksekusi

// FILTER => melakukan looping dan mengembalikan array baru berdasarkan kondisi pada return function
const ages: number[] = [17, 27, 32, 14, 25, 16];
const result4 = ages.filter((age) => {
  return age > 17;
});

console.log(result4);

// FIND => Mencari value yang ditemukan pertama kali di dalam array
const ages2: number[] = [17, 27, 32, 14, 25, 16];
const result5 = ages2.find((age) => age > 18);
//{
//   return age > 18
// })
console.log(result5);

// FINDINDEX => mirip kayak find tapi yang dihasilkan adalah indexnya
const ages3: number[] = [17, 27, 32, 14, 25, 16];
const result6 = ages3.findIndex((age) => age > 18);
console.log(result6);

// REDUCE => Biasa digunakan untuk operasi aritmatika pada tiap isi array
const numbers: number[] = [17, 27, 32, 14, 25, 16];
const hasil = numbers.reduce((a, b) => a + b);
console.log(hasil);

// Includes => Mengecek value pada array, hasil returnya adalah boolean
const fruits5: string[] = ["mango", "apple", "banana", "orange", "lemon"];
console.log(fruits5.includes("banana"));
