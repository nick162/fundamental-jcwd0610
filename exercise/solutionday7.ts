const checkObjectEqual = (obj1: any, obj2: any) => {
  const keys1 = Object.keys(obj1); // Object.keys {Mengambil key di dalam object dan ditampung dalam array baru}
  const keys2 = Object.keys(obj2);

  // Kalo untuk mengambil value object, Object.values(objectnya)

  console.log(keys1);
  console.log(keys2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    console.log(key);
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

console.log(checkObjectEqual({ a: 1 }, { b: 2 }));

// NO 2
const intersection = (obj1: any, obj2: any) => {
  const duplicate = {};
  for (const key in obj1) {
    console.log(key);
    if (obj1[key] === obj2[key]) {
      duplicate[key] = obj1[key];
    }
  }
  return duplicate;
};

console.log(intersection({ a: 1, b: 1 }, { a: 2, b: 1 }));

// For in untuk melakukan looping dalam object
// For of untuk melakukan looping dalam array

// NO 3

interface Student {
  name: string;
  email: string;
}

function combineArray(arr1: Student[], arr2: Student[]) {
  // tampung kedua arraynya
  const mergeArr = [...arr1, ...arr2];
  console.log(mergeArr);
  const temp: Student[] = [];

  // looping dulu
  mergeArr.forEach((student) => {
    console.log(student);
    const existingStudent = temp.find((murid) => {
      return murid["email"] == student.email;
    });

    if (!existingStudent) {
      temp.push(student);
    }
  });

  return temp;
}

const student1 = [
  { name: "budi", email: "budi@gmail.com" },
  { name: "joko", email: "joko@gmail.com" },
];

const student2 = [
  { name: "budi", email: "budi@gmail.com" },
  { name: "joki", email: "joki@gmail.com" },
];

console.log(combineArray(student1, student2));

// NO 4
const switchKeyToValue = (data: any[]) => {
  // buat variable untuk menampung hasil
  console.log(data);

  const result = [];

  data.forEach((item) => {
    console.log(item);
    //variable penyimpan object
    let temp = {};
    for (const key in item) {
      console.log(item[key]);
      temp[item[key]] = key;
    }
    result.push(temp);
  });
  return result;
};

const input = [
  {
    name: "David",
    age: 23,
  },
  {
    name: "Joko",
    Age: 22,
  },
];

console.log(switchKeyToValue(input));

// NO 5
const faktorial = (n: number) => {
  if (n === 1) {
    return {
      steps: [1],
      total: 1,
    };
  } else {
    let next = faktorial(n - 1);
    console.log(next);

    return {
      steps: [n, ...next.steps],
      total: n * next.total,
    };
  }
};

const { steps, total } = faktorial(5);
console.log(steps.join(" x "));
console.log(steps);
console.log(total);
console.log(faktorial(5));

/* 
Proses Eksekusi Rekursi:
    1. factorial(5) dipanggil, tetapi untuk menghitung total, ia harus menunggu 
       factorial(4).
    2. factorial(4) dipanggil, tetapi ia harus menunggu factorial(3).
    3. factorial(3) dipanggil, tetapi ia harus menunggu factorial(2).
    4. factorial(2) dipanggil, tetapi ia harus menunggu factorial(1).
    5. Base case tercapai di factorial(1), sehingga dikembalikan 
       { steps: [1], total: 1 }.
    6. Sekarang factorial(2) bisa lanjut dengan hasil dari factorial(1), 
       menghitung { steps: [2, 1], total: 2 * 1 }, lalu mengembalikan hasilnya.
    7. factorial(3) lanjut dengan hasil dari factorial(2), menghitung 
       { steps: [3, 2, 1], total: 3 * 2 }, lalu mengembalikan hasilnya.
    8. factorial(4) lanjut dengan hasil dari factorial(3), menghitung 
       { steps: [4, 3, 2, 1], total: 4 * 6 }, lalu mengembalikan hasilnya.
    9. factorial(5) akhirnya mendapatkan hasil dari factorial(4), menghitung 
       { steps: [5, 4, 3, 2, 1], total: 5 * 24 }, lalu mengembalikan hasil akhir.

Kesimpulan:
    - Setiap pemanggilan rekursi harus menunggu hasil dari pemanggilan berikutnya 
      sebelum ia bisa melanjutkan perhitungannya.
    - Karena itu, kode dalam return pada else baru dieksekusi setelah pemanggilan 
      rekursif selesai dan mulai kembali ke atas dari base case.
    - Itulah sebabnya console.log(next) mencetak hasil dari rekursi terdalam ke luar, 
      bukan sebaliknya.
*/
