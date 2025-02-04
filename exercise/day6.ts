// Create a function to calculate array of student data
// ● The object has this following properties :
// ○ Name → String
// ○ Email → String
// ○ Age → Date
// ○ Score → Number
// ● Parameters : array of student
// ● Return values :
// ○ Object with this following properties :
// ■ Score
// ● Highest
// ● Lowest
// ● Average
// ■ Age
// ● Highest
// ● Lowest
// ● Average

// interface Siswa {
//     name: string;
//     email:string;
//     age:number;
//     score:number;
// }

class Student {
  name: string;
  email: string;
  age: number;
  score: number;

  student1: {
    name: "budi";
    email: "budi@gmail.com";
    age: 22;
    score: 80;
  };

  student2: {
    name: "joko";
    email: "joko@gmail.com";
    age: 21;
    score: 88;
  };

  student3: {
    name: "andi";
    email: "andi@gmail.com";
    age: 22;
    score: 90;
  };

  calculate;
}

const siswa = new Student();

// console.log(siswa.student1.age)

// Solution
class StudentStatistics {
  students: { name: string; email: string; age: Date; score: number }[];

  constructor(
    students: { name: string; email: string; age: Date; score: number }[]
  ) {
    this.students = students;
  }

  calculateStats(): {
    score: { highest: number; lowest: number; average: number };
    age: { highest: number; lowest: number; average: number };
  } | null {
    if (this.students.length === 0) return null;

    const ages = this.students.map((student) => student.age.getFullYear());

    const scores = this.students.map((student) => student.score);

    return {
      score: {
        highest: Math.max(...scores),
        lowest: Math.min(...scores),
        average: parseFloat(
          (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2)
        ),
      },
      age: {
        highest: Math.max(...ages),
        lowest: Math.min(...ages),
        average: Math.round(ages.reduce((a, b) => a + b, 0) / ages.length),
      },
    };
  }
}

// Contoh penggunaan
const students = [
  {
    name: "Alice",
    email: "alice@gmail.com",
    age: new Date(2000, 5, 15),
    score: 85,
  },
  {
    name: "Bob",
    email: "bob@gmail.com",
    age: new Date(1998, 11, 22),
    score: 90,
  },
  {
    name: "Charlie",
    email: "charlie@gmail.com",
    age: new Date(2002, 3, 10),
    score: 78,
  },
];

const stats = new StudentStatistics(students);
console.log(stats.calculateStats());

let arrStudent: { name: string }[] = [
  {
    name: "alan",
  },
];

console.log(arrStudent[0].name);

// Solusi NO 2
