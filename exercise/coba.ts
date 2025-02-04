class calculateArrStudents {
  // Simpan parameter terlebih dahulu
  students: { name: string; email: string; age: number; score: number }[];
  // deklarasikan di constructor bahwa akan ada tipe ada array yang diisi dengan object, lalu isi parameter obectnya
  constructor(
    students: { name: string; email: string; age: number; score: number }[]
  ) {
    // Ambil datanya dan jadikan students
    this.students = students;
  }

  // buat function untuk menghitungnya
  calculateStudents(): {
    score: { highest: number; lowest: number; average: number };
    age: { highest: number; lowest: number; average: number };
  } | null {
    if (this.students.length === 0) return null;

    const score = this.students.map((student) => student.score);
    const age = this.students.map((student) => student.age);

    return {
      score: {
        highest: Math.max(...score),
        lowest: Math.min(...score),
        average: score.reduce((a, b) => a + b / score.length),
      },
      age: {
        highest: Math.max(...age),
        lowest: Math.min(...age),
        average: age.reduce((a, b) => a + b / age.length),
      },
    };
  }
}

const students = [
  {
    name: "alice",
    email: "alice@gmail.com",
    age: 20,
    score: 88,
  },
  {
    name: "joko",
    email: "joko@gmail.com",
    age: 22,
    score: 90,
  },
  {
    name: "budi",
    email: "budi@gmail.com",
    age: 29,
    score: 89,
  },
];

const hitungSiswa = new calculateArrStudents(students);

console.log(hitungSiswa.calculateStudents());

// NO 2
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  private products: { product: Product; qty: number }[] = [];
  private total: number = 0;

  addToCart(product: Product, qty: number): void {
    this.products.push({ product, qty });
    this.total += product.price * qty;
    console.log(`${qty} x ${product.name} added to cart.`);
  }

  showTotal(): void {
    console.log(`Total: $${this.total.toFixed(2)}`);
  }

  checkout(): {
    products: { name: string; qty: number; price: number }[];
    total: number;
  } {
    console.log("Transaction completed.");
    return {
      products: this.products.map(({ product, qty }) => ({
        name: product.name,
        qty,
        price: product.price,
      })),
      total: this.total,
    };
  }
}

// Example usage
const apple = new Product("Apple", 1.5);
const banana = new Product("Banana", 0.75);

const transaction = new Transaction();
transaction.addToCart(apple, 3);
transaction.addToCart(banana, 5);
transaction.showTotal();
const receipt = transaction.checkout();
console.log(receipt);
