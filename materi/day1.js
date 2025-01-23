console.log("hello world");

/* comment */

//Variable (storage / penampungan data)
//var, let, const ( Var jarang dipake karena nama variablenya bisa dipake lagi, sedangkan let dan const hanya bisa sekali )

var person = "Budi";
console.log(person);

// example
var person = "budi";
var person = "Kuli";
console.log(person);
// tidak error^

/*
let orang ="andi"
let orang ="kami"
error
let bisa diubah isi variable dengan cara dibawah ini
*/
let person2 = "Joko";
person2 = "Siti";
console.log(person2);

// Kalo const tidak bisa diubah
const person3 = "Indro";
// person3 = "Kasino"; Kalo di type script ini akan kelihatan error dan person 3 tetap tidak bisa diubah

// ============ Variable Naming
/* 
    - Harus berisi hanya hurung, angka, dan simbol "$" dan "_"
    - Karakter Pertama tidak boleh angka
    - Case sensitive (let namaorang, let namaOrang)
    - Tidak bisa menggunakan reservewords (kata-kata yang sudah digunakan oleh JS => delete, threw, debugger dll)
*/

// =========== Data Types
// Primitive Data Types : String, number, Bolean, null, dan undefined
// Non Primitive Data Types : object dan array ( sering muncul dipertanyaan ujian dan seleksi tes)

//String => ditandai dengan " " or ' '
console.log("Hello");

// Number => 1 2 3 4 5 6, tidak dibalut dengan petik
console.log(1, 2, 3);
console.log(100);

//Boolean => True & False
console.log(true);
console.log(false);

// Null => Menandakan sebuah value itu masih kosong dan belum terisi (JS => datanya masih kosong dan nanti akan kuiisi)
let orang = null;

// Undefined => JS Tidak tau isinya
let orang2 = undefined;
