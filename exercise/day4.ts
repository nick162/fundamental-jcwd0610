// NO 1
function segitiga(height: number) {
  for (let index = 1; index <= height; index++) {
    let row: string = "";

    for (let j = 1; j <= index; j++) {
      row += j + "";
    }
    console.log(row);
  }
}

segitiga(5);

// NO 2
function segitiga2(height: number) {
  let currentNumber: number = 1;

  for (let index = 1; index <= height; index++) {
    let row: string = "";

    for (let j = 1; j <= index; j++) {
      if (currentNumber < 10) {
        row += "0" + currentNumber + " ";
      } else {
        row += currentNumber + " ";
      }
      currentNumber++;
    }
    console.log(row);
  }
}

segitiga2(5);
// NO 3
function fizzBuzz(n: number) {
  let mssg: string = "";
  for (let index = 1; index <= n; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      mssg += "fizzbuzz" + " ";
    } else if (index % 3 === 0) {
      mssg += "fizz" + " ";
    } else if (index % 5 === 0) {
      mssg += "buzz" + " ";
    } else {
      mssg += index + " ";
    }
  }
  return mssg;
}

console.log(fizzBuzz(15));

// NO 4
function BMI(weight: number, heigh: number) {
  const result = weight / (heigh * heigh);
  if (result < 18.5) {
    return " less weight ";
  } else if (result >= 18.5 && result <= 24.9) {
    return "idel";
  } else if (result >= 25.5 && result <= 29.9) {
    return "over weight";
  } else if (result >= 30.0 && result <= 39.9) {
    return "very over weight";
  } else if (result > 39.9) {
    return "obesity";
  }
}

console.log(BMI(70, 1.75));

// NO 5
function removeOddNumbers(numbers: number[]) {
  return numbers.filter((number) => number % 2 === 0);
}

console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// cara 2
function removeOddNumbers2(numbers: number[]) {
  const result: number[] = [];

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
      result.push(numbers[index]);
    }
  }
  return result;
}

console.log(removeOddNumbers2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// NO 6
function splitString(str: string) {
  return str.split(" ");
}

console.log(splitString("Hello World"));
