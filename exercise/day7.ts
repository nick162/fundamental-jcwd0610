// interface Object {
//     a:{},
//     b:{}
// }

function checkEqual(test1: object, test2: object) {
  if (JSON.stringify(test1) === JSON.stringify(test2)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEqual({ a: 1, b: "" }, { a: 1, b: " " }));

// NO 2
function interSection(user1: object, user2: object) {
  let c = {};
  for (let a in user1) {
    if (user1[a] === user2[a]) {
      c[a] = user1[a];
    }
  }
  return c;
}

const object1 = { a: 1, b: 2, c: 3 };
const object2 = { a: 1, c: 3 };

console.log(interSection(object1, object2));

// NO 3
function mergeArray(
  arr1: { name: string; email: string }[],
  arr2: { name: string; email: string }[]
) {
  // variable penambung array3
  let newArr = [...arr1, ...arr2];
  let newArr2: { name: string; email: string }[] = [];

  for (let index = 0; index < newArr.length; index++) {
    const element = newArr2.filter((val) => {
      return val.email === newArr[index].email;
    });

    if (!element.length) {
      newArr2.push(newArr[index]);
    }
  }

  return newArr2;
}

const array1 = [
  { name: "Andi", email: "Andi@gmail.com" },
  { name: "Angga", email: "Angga@gmail.com" },
  { name: "Acong", email: "Acong@gmail.com" },
];

console.log(array1[0]);

const array2 = [
  { name: "Andi", email: "Andi@gmail.com" },
  { name: "Mashum", email: "Mashum@gmail.com" },
  { name: "Kodrat", email: "Kodrat@gmail.com" },
];

// const array3 = [
//     {name:"Mashum", email:"Mashum@gmail.com"},
//     {name:"Angga", email:"Angga@gmail.com"},
//     {name:"Acong", email:"Acong@gmail.com"},
//     {name:"Kodrat", email:"Kodrat@gmail.com"}
// ]

console.log(mergeArray(array1, array2));

// NO 4

// Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]

const switchObj = (arr) => {
  return arr.map((obj) => {
    let newObj = {};
    for (let val in obj) {
      if (obj.hasOwnProperty(val)) {
        newObj[obj[val]] = val;
      }
    }
    return newObj;
  });
};

const Input = [{ name: "David", age: 20 }];
const output = switchObj(Input);
console.log(output);

// NO 5
function faktorial(n: number) {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return (n *= faktorial(n - 1));
  }
}

console.log(faktorial(5));
