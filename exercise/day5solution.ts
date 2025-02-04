// NO 1
const sortFunction = (arr: number[]) => {
  arr.sort((a, b) => a - b);
  const lowest: number = arr[0];
  const highest: number = arr[arr.length - 1];
  const sum: number = arr.reduce((a, b) => a + b);
  const average: number = sum / arr.length;

  return { lowest, highest, average };
  // return {lowest:lowest,highest:highest,average:average}
  // console.log(lowest)
  // console.log(highest)
  // console.log(arr)
};

console.log(sortFunction([3, 2, 4, 5, 67, 8]));

// NO 2
const concatWords = (words: string[]) => {
  console.log(words);
  if (words.length === 1) {
    return words[0];
  } else {
    const lastWords = words.pop();
    console.log(words.join(", "));
    console.log(lastWords);
    return words.join(" , ") + " and " + lastWords;
  }
};

console.log(concatWords(["apple", "banana", "mango", "date"]));

// NO 3
const secondSmallest = (arr: number[]) => {
  console.log(arr);
  arr.sort((a, b) => a - b);
  console.log(arr);
  return arr[1];
};

console.log(secondSmallest([4, 3, 2, 4, 5, 5]));

// NO 4
const calculateElement = (arr1: number[], arr2: number[]) => {
  console.log(arr1, arr2);
  // butuh array baru untuk menampung
  let arr3: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i] + arr2[i]); // i otomatis menjadi index dari setiap parameter yang diatas
  }
  return arr3;
};

console.log(calculateElement([1, 2, 3], [3, 2, 1]));

// NO 5
const addNewElement = (arr1: number[], newElement: number) => {
  console.log(arr1, newElement);
  if (!arr1.includes(newElement)) {
    arr1.push(newElement);
  }
  return arr1;
};

console.log(addNewElement([1, 2, 3], 9));

// NO 6
const sumNumberDataType = (arr: any[]) => {
  let total: number = 0;

  arr.forEach((value) => {
    if (typeof value === "number") {
      total += value;
    }
  });

  return total;
};

console.log(sumNumberDataType(["3", 1, "string", null, false, undefined, 2]));

// yang menghasilkan array baru (filter dan map)
// join akan selalu menjadikan string

// NO 7
const limitData = (maxSize: number, ...integrs: number[]) => {
  const result: number[] = [];
  integrs.forEach((integer) => {
    if (result.length === maxSize) {
      return;
    } else {
      result.push(integer);
    }
  });

  return result;
};

console.log(limitData(5, 8, 7, 6, 5, 5, 6, 7, 7));

// NO 8
const combineArr = (arr1: number[], arr2: number[]) => {
  return [...arr1, ...arr2];
};

console.log(combineArr([1], [2]));

// NO 9
const findDuplicate = (arr: number[]) => {
  const duplicate: number[] = [];
};

// NO 10

// NO 11
// NO 12
// NO 13

const rockPaperScissor = (player: "rock" | "paper" | "scissor") => {
  const choices: ("rock" | "paper" | "scissor")[] = [
    "rock",
    "paper",
    "scissor",
  ];

  const computer = choices[Math.floor(Math.random() * 2.9)];

  if (player === computer) {
    return { result: "Draw", computer, player };
  }

  if (
    (player === "rock" && computer === "scissor") ||
    (player === "scissor" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return { result: "Win", computer, player };
  }

  return { result: "Lose", computer, player };
};

console.log(rockPaperScissor("paper"));
