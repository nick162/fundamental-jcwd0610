interface Student {
  name: string;
  email: string;
  age: number;
  score: number;
}

// isi Argument dulu
const students = [
  { name: "joko", email: "joko@gmail.com", age: 23, score: 88 },
  { name: "budi", email: "budi@gmail.com", age: 24, score: 89 },
  { name: "alan", email: "alan@gmail.com", age: 21, score: 90 },
];

// Buat classnya
class CalculateStudent {
  students: Student[];

  constructor(students: Student[]) {
    this.students = students;
    // 2. cek apakah datanya sudag masuk
    console.log(students);
  }

  // 3 Membuat methodnya

  calculate() {
    // 4. membuat variable untuk menyimpan score dan age
    let maxScore: number,
      minScore: number,
      avgScore: number,
      maxAge: number,
      minAge: number,
      avgAge: number;

    // 5. Kita short dan reduce dulu nilai yang ada di array, dan mengelompkannya berdasarkan skor terendah
    const sortStudentScore = this.students.sort((a, b) => a.score - b.score);
    //   console.log(sortStudentScore)
    const reduceStudentCore = this.students.reduce((a, b) => a + b.score, 0);
    //   console.log(reduceStudentCore)
    maxScore = sortStudentScore[sortStudentScore.length - 1].score;
    //   console.log(maxScore)
    // 5. Karena sudah diurutkan, maka kita ambil array ke 0 dari score
    minScore = sortStudentScore[0].score;
    //   console.log(minScore);
    avgScore = reduceStudentCore / this.students.length;
    //   console.log(avgScore);

    const sortStudentAge = this.students.sort((a, b) => a.age - b.age);
    console.log(sortStudentAge);
    const reduceStudentAge = this.students.reduce((a, b) => a + b.age, 0);
    console.log(reduceStudentAge);
    maxAge = sortStudentAge[sortStudentAge.length - 1].age;
    console.log(maxAge);
    minAge = sortStudentAge[0].age;
    console.log(minAge);
    avgAge = reduceStudentAge / this.students.length;
    console.log(avgAge);

    return {
      score: {
        highest: maxScore,
        lowest: minScore,
        average: avgScore,
      },
      age: {
        highest: maxAge,
        lowest: minAge,
        average: avgAge,
      },
    };
  }
}

const newStudent = new CalculateStudent(students);
console.log(newStudent.calculate());

// ● Create a program to create transaction
// ● Product Class
// ○ Properties
// ■ Name
// ■ Price
// ● Transaction Class
// ○ Properties
// ■ Total
// ■ Product
// ● All product data
// ● Qty
// ○ Add to cart method → Add product to transaction
// ○ Show total method → Show total current transaction
// ○ Checkout method → Finalize transaction, return transaction data

// interface Product {
//   name:string;
//   price:number;

// }

// Kelas untuk menyimpan product
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// Kelas Transactionnya
class Transaction {
  products: { product: Product; qty: number }[] = [];
  total: number = 0;

  //method add to card
  addToCard(product: Product, qty: number) {
    // masukan produknya
    this.products.push({ product, qty });
    this.total += product.price * qty;
  }

  showTotal() {
    return this.total;
  }

  checkOut(): {
    total: number;
    products: { name: string; price: number; qty: number }[];
  } {
    const transactionData = {
      total: this.total,
      products: this.products.map(({ product, qty }) => ({
        name: product.name,
        price: product.price,
        qty: qty,
      })),
    };

    // Reset transaction after checkout
    this.products = [];
    this.total = 0;

    return transactionData;
  }
}

const product1 = new Product("Mango", 1000);
const product2 = new Product("Apple", 2000);

const transacton1 = new Transaction();

transacton1.addToCard(product1, 4);
transacton1.addToCard(product2, 3);

console.log("Total transaksi: ", transacton1.showTotal());
const finalTransaction = transacton1.checkOut();
console.log("Data transaksi setelah checkout: ", finalTransaction);

// // Transaksinya
// class Transaction extends Product {
//   // karena pake inheritance maka cuman deklar propertyinya
//   total:number;
//   qty:number;
//   allProduct:number;

//   constructor(name?:string, price?:number,total?:number,qty?:number,allProduct?:number){
//     super(name,price)
//     this.total = total;
//     this.qty = qty
//     this.allProduct = allProduct
//   }

//   addToCard(value:object){
//     console.log(value)
//     let name = value

//     // let name:string,
//     //     price:number,
//     //     qty:number

//     if (this.qty === 0){
//       return 'There is no Transaction'
//     } else {

//     }

//   }

//   showTotalMethod(){

//   }

//   checkOut (){

//   }
// }

// const product = new Product("Banana",2000)
// const product2 = new Product("Apple",3000)
// const newTransaction = new Transaction("Mango",2000,40,10,1)
// const newTransaction2 = new Transaction("Kiwi",4000,20,15,2)
// console.log(newTransaction.addToCard);

// class Product {
//   name: string;
//   price: number;

//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class Transaction {
//   products: { product: Product; qty: number }[] = [];
//   total: number = 0;

//   addToCart(product: Product, qty: number): void {
//     this.products.push({ product, qty });
//     this.total += product.price * qty;
//   }

//   showTotal(): number {
//     return this.total;
//   }

//   checkout(): { total: number; products: { name: string; price: number; qty: number }[] } {
//     const transactionData = {
//       total: this.total,
//       products: this.products.map(({ product, qty }) => ({
//         name: product.name,
//         price: product.price,
//         qty: qty
//       }))
//     };

//     // Reset transaction after checkout
//     this.products = [];
//     this.total = 0;

//     return transactionData;
//   }
// }

// // Contoh penggunaan
// const product1 = new Product("Laptop", 15000000);
// const product2 = new Product("Mouse", 250000);

// const transaction = new Transaction();
// transaction.addToCart(product1, 1);
// transaction.addToCart(product2, 2);

// console.log("Total transaksi: ", transaction.showTotal());

// const finalTransaction = transaction.checkout();
// console.log("Data transaksi setelah checkout: ", finalTransaction);
