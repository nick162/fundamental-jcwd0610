// NO 1
function getNumber(numbers: number[]) {
  let lowest = numbers[0];
  let highest = numbers[0];
  let total: number = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < lowest) {
      lowest = numbers[index];
    } else if (numbers[index] > highest) {
      highest = numbers[index];
    }
    total += numbers[index];
  }
  const average = total / numbers.length;
  return `${lowest}, ${highest},${average}}`;
}

console.log(getNumber([12, 5, 23, 18, 4, 45, 32]));

// NO 2
function separateWords(words: string[]) {
  for (let index = 0; index < words.length; index++) {
    if (words.length === 0) {
      return words[0];
    } else if (words.length === 1) {
      return words[1];
    } else if (words.length >= 2) {
      return `${words.slice(0, -1).join(" ,")} and ${words[words.length - 1]}`;
    }
  }
}

console.log(separateWords(["apple", "banana", "cherry", "date"]));

// NO 3
function secondLargest(arr: number[]) {
  arr.sort((a, b) => a - b);
  return arr[1];
}

console.log(secondLargest([5, 3, 1, 7, 2, 6]));

// NO 4
function calculateEachElement(arr1: number[], arr2: number[]) {
  const hasil = arr1.map((a, b) => a + arr2[b]);
  return hasil;
}

console.log(calculateEachElement([1, 2, 3], [3, 2, 1]));

// NO 5
function addElments(arr: number[], newEelement: number) {
  if (arr.includes(newEelement)) {
    return arr;
  } else {
    return [...arr, newEelement];
  }
}

console.log(addElments([1, 2, 3], 4));
console.log(addElments([1, 2, 3], 2));

// NO 6
// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

const mixedArray = (arr: (number | string | null | undefined | boolean)[]) => {
  // let newAngka:number = 0;
  // for (let index = 0; index < arr.length; index++) {
  //     if(arr[index] === "string" || arr[index] === "null" || arr[index] === "undefined" || arr[index] === "boolen"){
  //         return arr
  //     } else if (arr[index] === "number"){
  //         newAngka += arr[index]
  //     };

  // }
  const newElementArray = arr
    .filter((a) => typeof a === "number")
    .reduce((a, b) => a + b);
  return newElementArray;
  // const newElementArray = arr.filter((a) => {
  //     if (typeof a === "number"){

  //     }
  // })
};

console.log(mixedArray(["3", 1, "string", null, false, undefined, 2]));

// NO 7
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

function insertInteger(maxSize: number, ...numbers: number[]) {
  let result: number[] = [];

  numbers.forEach((number) => {});
}

console.log([]);

function insertIntegers(arr, maxsize, ...integers) {
  const newArr = arr.concat(integers.slice(0, maxsize - arr.length));
  return newArr;
}

const ar6 = [];
const maxsize = 5;
const result10 = insertIntegers(ar6, maxsize, 5, 6, 7, 8, 8, 8, 8, 8, 65, 5);
console.log(result10);

// NO 8
// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
const combineArray = (arr1: number[], arr2: number[]) => {
  let newArray = arr1.concat(arr2);
  return newArray;
};

console.log(combineArray([1, 2, 3], [4, 5, 6]));

// No 9
//  Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
const findDuplicate = (arr1: number[]) => {
  let Duplicate = arr1.filter((a, b) => arr1.indexOf(a) !== b);
  return [...new Set(Duplicate)];
};

console.log(findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// NO 10
// Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
const findDifference = (arr1: number[], arr2: number[]) => {
  let newElement = arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));
  return newElement;
};

console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// NO 11
//  Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

function findPrimitiveData(
  arr: (number | null | [] | string | undefined | boolean | object)[]
) {
  let newArr = arr.filter((a) => {
    if (typeof a !== "object") {
      return arr;
    }
  });

  return newArr;
}

console.log(findPrimitiveData([1, [], undefined, {}, "string", {}, []]));
// NO 12
// Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

function returnDuplicate(arr: number[]) {
  const duplicates = arr
    .filter((item, index) => arr.indexOf(item) !== index)
    .reduce((a, b) => a + b);

  return duplicates;
}

console.log(returnDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]));

// NO 13
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

function gameSuit(rock: number, paper: number, scissor: number) {}

// Explicit mapping of winning key (i.e. "rock") beating losing value (i.e. "scissors").
const whatBeatsWhat = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

// Derive computerChoices from keys of whatBeatsWhat.
const computerChoices = Object.keys(whatBeatsWhat);

function computerPicks() {
  // Randomize rock paper and scissors.
  let randomizeChoice = Math.floor(Math.random() * computerChoices.length);
  // randomizeChoice will be one of [0,1,2] representing all possible indices of computerChoices.
  return computerChoices[randomizeChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It is a tie!!";
  }

  // Check if playerSelection in whatBeatsWhat maps to computerSelection
  // and if so, player has beaten computer.
  if (whatBeatsWhat[playerSelection] === computerSelection) {
    return "You win this game!";
  }

  // Undoubtedly, whatBeatsWhat[computerSelection] === playerSelection
  return "The computer wins!";
}

const playerSelection = "rock";
const computerSelection = computerPicks();
const result = playRound(playerSelection, computerSelection);
console.log(`${result} (${playerSelection} vs ${computerSelection})`);
