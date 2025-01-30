// ====> NO 1
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

// ====> NO 2
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

// ====> NO 3
const getSecondNumber = (arr: number[]) => {
  arr.sort((a, b) => a - b);
  return arr[1];
};

const arr4: number[] = [5, 3, 1, 7, 2, 6];
console.log(getSecondNumber(arr4));

// ====> NO 4
function calculateElement(arr1: number[], arr2: number[]) {
  let arr3 = arr1.map((value, index) => value + arr2[index]);
  return arr3;
}

console.log(calculateElement([1, 2, 3], [3, 2, 1]));

// ====> NO 5
const addElements = (arr: number[], newElement: number) => {
  if (arr.includes(newElement)) {
    return arr;
  } else {
    return [...arr, newElement];
  }
};

console.log(addElements([1, 2, 3, 4], 3));
console.log(addElements([1, 2, 3, 4], 7));

// ====> NO 6
function mixedArray(
  arr: (string | number | null | boolean | undefined)[]
): number {
  let newArr = arr
    .filter((item) => typeof item === "number")
    .reduce((acc, num) => acc + num, 0);
  return newArr;
}

console.log(mixedArray(["3", 1, "string", null, false, undefined, 2]));

// ====> NO 7
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

// ====> NO 8
function combineArray(arr1: number[], arr2: number[]) {
  let newArray: number[] = arr1.concat(arr2);
  return newArray;
}

console.log(combineArray([1, 2, 3], [4, 5, 6]));

// ====> NO 9
function findDuplicate(array2: number[]) {
  let newDuplicate = array2.filter(
    (item, index) => array2.indexOf(item) !== index
  );
  return [...new Set(newDuplicate)];
}

console.log(findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// ====> NO 10
function findDifference(arr1: number[], arr2: number[]) {
  let newElementArray = arr1
    .filter((item) => !arr2.includes(item))
    .concat(arr2.filter((item) => !arr1.includes(item)));
  return newElementArray;
}

console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
