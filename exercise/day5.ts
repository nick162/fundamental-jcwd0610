// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
// NO 1
function getNumber(arr: number[]) {
  let lowest = arr[0];
  let highest = arr[0];
  let total: number = 0;
  // untuk i sama dengan 0; jika i lebih kecil dari panjang array, lakukan pengulangan,
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
      console.log(lowest);
    } else if (arr[i] > highest) {
      highest = arr[i];
      console.log(highest);
    }

    total += arr[i];
  }
  console.log(`${highest} dan ${lowest}`);
  console.log(total / arr.length);
}

getNumber([12, 5, 23, 18, 4, 45, 32]);

// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// NO 2
// Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

function concatString(arr: string[]) {
  for (let index = 0; index < arr.length; index++) {
    if (arr.length === 0) {
      return arr;
    } else if (arr.length === 1) {
      return arr[0];
    } else if (arr.length >= 2) {
      return `${arr.slice(0, -1).join(", ")} and ${arr[arr.length - 1]}`;
    }
  }
}

const arr2 = ["apple", "banana", "cherry", "date"];
const hasil = concatString(arr2);
console.log(hasil);

function concatenateWords(words: string[]): string {
  if (words.length === 0) {
    return "";
  } else if (words.length === 1) {
    return words[0];
  } else if (words.length >= 2) {
    return `${words.slice(0, -1).join(", ")}, and ${words[words.length - 1]}`;
  }
}

// Example usage
const arr = ["apple", "banana", "cherry", "date"];
const result = concatenateWords(arr);
console.log(result); // Output: "apple, banana, cherry, and date"

const hewan = ["kucing", "bebek", "ayam", "kambing", "semut"];

const hewanBaru = hewan.slice(0, -1);

console.log(hewanBaru);

// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
// ======> sort()
// Metode ini berfungsi untuk mengurutkan elemen pada array baik secara ascending atau descending.

// const angka = [20, 10, 3, 30, 58, 42, 6, 9]
// const huruf = ['z', 'a', 'c', 'g', 'p']

// // ascending order
// const descOrder = angka.sort((a, b) => a > b ? 1 : -1);
// console.log(descOrder); // Output: [3, 6, 9, 10, 20, 30, 42, 58]

// // descending order
// const ascOrder = huruf.sort((a, b) => a > b ? -1 : 1);
// console.log(ascOrder); // Output: ['z', 'p', 'g', 'c', 'a']
// NO 3

const getSecondNumber = (arr: number[]) => {
  arr.sort((a, b) => a - b);
  return arr[1];
};

const arr4: number[] = [5, 3, 1, 7, 2, 6];
console.log(getSecondNumber(arr4));

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
// Metode ini berfungsi untuk membuat array baru sambil mengecek/melakukan operasi terhadap setiap elemen array.

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // membuat array baru dari array angka untuk memeriksa apakah setiap elemennya bernilai habis dibagi 2 atau tidak
// const mapedArray = angka.map(item => item % 2 === 0);
// console.log(mapedArray); // output: [false, true, false, true, false, true, false, true, false]

// // membuat array baru dari array angka untuk melakukan operasi perkalian 2 pada setiap elemennya
// const multipleOfTwo = angka.map(e => e * 2);
// console.log(multipleOfTwo); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18
// NO 4

function calculateElement(arr1: number[], arr2: number[]) {
  let arr3 = arr1.map((value, index) => value + arr2[index]);
  return arr3;
}

console.log(calculateElement([1, 2, 3], [3, 2, 1]));

// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
// NO 5

const addElements = (arr: number[], newElement: number) => {
  if (arr.includes(newElement)) {
    return arr;
  } else {
    return [...arr, newElement];
  }
};

console.log(addElements([1, 2, 3, 4], 3));
console.log(addElements([1, 2, 3, 4], 7));

// const addElements = (arr:number[], newElement:number) => {
//     for (let index = 0; index < arr.length; index++) {
//         if(arr[index] === newElement){
//             console.log(arr)
//         } else if(arr[index] !== newElement){
//             let arr33 = arr.push(newElement)
//             console.log(arr)
//             return arr
//         }
//     }

// }

// console.log(addElements([1, 2, 3, 4],2))

// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

// NO 6
function mixedArray(
  arr: (string | number | null | boolean | undefined)[]
): number {
  let newArr = arr
    .filter((item) => typeof item === "number")
    .reduce((acc, num) => acc + num, 0);
  return newArr;
}

console.log(mixedArray(["3", 1, "string", null, false, undefined, 2]));

// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]
// NO 7

function insertMultipleMaximumSize(
  arr: number[],
  maxSize: number,
  ...integers: number[]
) {
  const newElement = [...arr, ...integers];
  return newElement.slice(0, maxSize);
}

const maxSize = 5;
const arr5: number[] = [5, 10, 24, 3, 6, 8, 9];
console.log(insertMultipleMaximumSize([], maxSize, ...arr5));

// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
// NO 8
function combineArray(arr1: number[], arr2: number[]) {
  let newArray: number[] = arr1.concat(arr2);
  return newArray;
}

console.log(combineArray([1, 2, 3], [4, 5, 6]));

// Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
// NO 9

function findDuplicate(array2: number[]) {
  let newDuplicate = array2.filter(
    (item, index) => array2.indexOf(item) !== index
  );
  return [...new Set(newDuplicate)];
}

console.log(findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
// NO 10

function findDifference(arr1: number[], arr2: number[]) {
  let newElementArray = arr1
    .filter((item) => !arr2.includes(item))
    .concat(arr2.filter((item) => !arr1.includes(item)));
  return newElementArray;
}

console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
