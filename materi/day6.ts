// Cara menuliskan Object
// Cara 1
const object1 = {};

// Cara 2
const object2 = new Object();

interface User {
  name: string;
  greet: () => void;
  greet2: () => void;
}

const user: User = {
  name: "budi",
  greet() {
    console.log("hai");
  },
  greet2: () => {
    console.log("hello");
  },
};

const person: any = {
  name: "budi",
  age: 20,
};

//add property
console.log(person);
person.hobby = "mancing";
console.log(person);
person["address"] = "jogja";
console.log(person);

// delete property
console.log(person);
delete person.address;
console.log(person);

// accessing value
console.log(person.name);
console.log(person.age); //
console.log(person["age"]); //
console.log(Object.values(person)); //

// Imutable => data yang tidak bisa berubaj
const count1: number = 4;
let count2: number = count1;
count2 = 10;

console.log(count1);
console.log(count2);

//Mutable
let orang1: any = { name: "jack" };
let orang2: any = orang1;

orang2.age = 20;

console.log(orang1);
console.log(orang2);

//Shallow Copy ==> berubah semua
let original = {
  name: "udin",
  address: {
    city: "jakarta",
  },
};

let copy = { ...original };

copy.address.city = "bandung";

console.log(original);
console.log(copy);

// DeepCopy

let original2 = {
  name: "udin",
  address: {
    city: "jakarta",
  },
};

let deepcopy = structuredClone(original2);
deepcopy.address.city = "bandung";
console.log(original2);
console.log(deepcopy);

//OPTIONAL CHAINING
let user4 = {};
// console.log(user4.address)
// console.log(user4.address.street)

console.log(user4.address);
console.log(user4.address?.street);

// FOR IN ====>
let person3 = {
  name: "udin",
  agge: 70,
  address: {
    city: "jakarta",
  },
};

for (const key in person3) {
  console.log(key);
  console.log(person3[key]);
}

// DESTRUCTURINg ASSIGMENT =====> Mengeluarkan property dalam object ke dalam sebuah variable
let person4 = {
  name: "ivan",
  age: 70,
  address: {
    city: "jakarta",
  },
};

// let { name, age } = person4;
let { name: nm, age } = person4;

nm = "jokowi";
// console.log(name);
console.log(nm);
console.log(age);

// Versi destruc array
const array = [10, 20];
const [a, b] = array;
console.log(a);
console.log(b);

// SPREAD OPERATOR ==============
// digunakan untuk copy isi object / menggabungkan object
const objectOne = { name: "tom", password: 123 };
const objectTwo = { email: "tomandjerry@gmail.com", name: "pepeng" };
const result = { ...objectOne, ...objectTwo, password: "anjay" };
console.log(result);

// THIS KEYWORD =========
// mengakses property lain disbeuah objek

const animal12 = {
  firstName: "udin",
  lastName: "blake",
  greet() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};

animal12.greet();

// CLASS ==========
// template / cetakan untuk membuat object
class User2 {
  greeting() {
    console.log("Hello World");
  }

  greeting2 = () => {
    console.log("hello world");
  };
}

// CLASS EXPRESSION
const User3 = class {
  name: " Budi ";
  hobby: " fishing";
  times(n: number) {
    return n * n;
  }
};

const human = new User3();

console.log(human.times(3));
// console.log(User3.times(3)) // gagal

// CONSTRUCTOR
// method bawaan dari class yang akan dijalankan pertama kali saat membuat object baru
// menggunakan class

// interface Test {
//   name:string;
// }

// class Person implements Test {
//   name:string;

//   constructor(){
//     this.name = "";
//   }
// }

// ACCESS MODIFIER -> Public & Private

class Person {
  name: string;
  #email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.#email = email;
  }

  private showEmail() {
    return "budidoremi@gmail.com";
  }

  sendReminder() {
    const email = this.showEmail();
    return email; //console.log(email)
  }

  greeting() {
    return `Hello ${this.name}`;
  }
}

const orang = new Person("budi", "budi@gmail.com");
const orang3 = new Person("Udin", "budi@gmail.com");
console.log(orang.sendReminder());
orang;

console.log(orang.greeting());
console.log(orang3.greeting());

// GETTER AND BETTER =======
// Getter (get) dan Setter (set) adalah methode khusus yang digunakan untuk membaca dan mengubah nilai prperty secara terkontrol

const orang4 = {
  firstName: "udin",
  lastName: "blake",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  // setter harus menerima parameter
  set fulName(value) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },

  // yang sering dipake daripada setter and getter
  register(value: string) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },

  showDetail() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(orang4.fullName);
orang4.fulName = "Joko Siti";
console.log(orang4.firstName);
console.log(orang4.lastName);
orang4.register("Jaka Umbaran");
console.log(orang4.firstName);
console.log(orang4.lastName);
console.log(orang4.showDetail());

// Inheritance ======
// Pewarisan dari parent class ke child class
// Property dan Method dari parent class bisa diakses oleh child class

// contoh tidak menggunakan inheritance
class employee {
  name: string;
  salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

class Manager {
  name: string;
  salary: number;
  department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

/*
  Masalah yang terjadi jika tidak menggunakan inheritance:
  - Duplikasi Kode: name, salary, dan method work() harus ditulis ulang di Employee dan Manager
  - Sulit dikelola: Jika ada perubahan di work(), kita harus mengedit di banyak tempat

*/

// Mengunakan Inheritance
class employee2 {
  name: string;
  salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    return `${this.name} is working`;
  }
}

class Manager2 extends employee2 {
  department: string;

  constructor(name: string, salary: number, department: string) {
    super(name, salary); // memanggil constructor dari parent
    this.department = department;
  }
}

const manager = new Manager2("Raden", 1000, "Comedy");
console.log(manager.name);
console.log(manager.salary);
console.log(manager.department);
console.log(manager.work());

// INSTANCE OF ======
// MENGECEK APAKAH SEBUAH OBJECK MEMILIKI HUBUNGAN KE CLASS TERTENTU

class Animal {}
class Rabbit extends Animal {}
class Tree {}
const rabbit = new Rabbit();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);
