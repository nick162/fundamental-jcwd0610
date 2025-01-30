//1.
function triangle(height: number) {
  let tinggi: number = 0;
  let str: string = "";

  for (let i = 0; i < height; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(`${tinggi}${j}`);
    }

    const result = ``;
  }
}

console.log(triangle(7));

function createTrianglePattern(height: number): void {
  let num = 1;
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num.toString().padStart(2, "0") + " ";
      num++;
    }
    console.log(row.trim());
  }
}

// Example usage:
createTrianglePattern(4);

// 2.
function Ulang(n: number) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("fuzz");
    } else if (i % 3 == 0 || i % 5 == 0) {
      console.log("fizzfuzz");
    } else {
      console.log(i);
    }
  }
}

Ulang(1);

//3.
// ● Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”z

const bodyMassIndex = (weight: number, height: number) => {
  let BMI: number = weight / (height * height);
  if (BMI < 18.5) {
    console.log(`${BMI} less gorup weight`);
  } else if (18.5 <= BMI && BMI <= 24.9) {
    console.log(`${BMI} Ideal Weight`);
  } else if (25.0 <= BMI && BMI <= 29.9) {
    console.log(`${BMI} overweight group`);
  } else if (30.0 <= BMI && BMI <= 39.9) {
    console.log(`${BMI} very overweight group`);
  } else if (BMI > 39.9) {
    console.log(`${BMI} obesity saudara`);
  } else {
    console.log("anda tidak termasuk dimanana-mana");
  }
};

bodyMassIndex(52, 1.67);

//4.
// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

const oddNumbers = (odd: number[]) => {
  const addArr = new Array();
  for (let index = 1; index < odd.length; index++) {
    if (index % 2 == 0) {
      console.log(addArr.concat(index));
    } else {
      console.log(`${index} adalah bilangan ganjil`);
    }
  }
};

oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//5.

function splitWords(str: string) {
  let word: string[] = str.split(" ");
  return word;
}

console.log(splitWords("Hello World"));
