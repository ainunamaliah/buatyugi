/*
let length =10;

const phi = 3.14;

length = 20;

console.log(length);
console.log("===============");

let a;
console.log(a);

let b = true;
let c = false;
console.log(typeof length);

let number = 100;
let koma = 12.5;
console.log(number.koma);

let fullname= "Ainun Amaliah";
console.log(fullname);

let dataNull= null;
console.loh(dataNull);

const car = {
    name : "terios",
    color: "White",
};
console.log(car);
*/

//Aritmatika---------------------------------------
// let add = 5 + 5;
// let mines = 5 - 5;
// let multiply = 5 * 5;
// let devide = 5 / 5;
// let modulus = 5 % 5;

// console.log("Add:", add);
// console.log("Mines:", mines);
// console.log("Multiply:", multiply);
// console.log("Divide:", divide);
// console.log("Modulues:", modulus);

// let firstName = "Ainun";
// let lastName = "Amaliah";
// console.log(firstName + " " + lastName);
// console.log(`${firstName} ${lastName}`);

//assigment-----------------------------------------
//let number = 10;
// console.log(number);
// number += 30;
// number = number +30;
// number -= 20;

// number++;
// number = number + 1;

// number--;
// number = number-1;
// console.log(number);

//perbandingan---------------------------------------
//let number = 10;
//let number = 20;
// console.log(number > number2);
// console.log(number < number2);
// console.log(number == number2);
// console.log(number === number2);

//logika-------------------------------------------
// console.log(true && true);
// console.log(true && false);
// console.log(true || false);
// console.log(!true);


// if else------------------------------------------
// let nilai = 40;
// if (nilai > 80){
//     console.log("nilaimu bagus!")
// } else if (nilai < 50){
//     console.log("nilai kurang bagus!");
// }else {
//     console.log("nilai lumayan lah ya");
// }


// logika pengganti dua kondisi------------------------
// let number = 9;
// let result = 
//     number % 2 === 0
//         ? '${number} merupakan bilangan genap'
//         : '${number} merupaka bilangan ganjil';
// console.log(result);

// string kosong, boolean-------------------------------
// let angka = 0;
// if (angka){
//     console.log('ini angka, ${angka}');
// } else {
//     console.log("angka 0");
// }

// switch----------------------------------------
// let score = "C";
// switch (score){
//     case "A":
//         console.log("Anda lulus dengan baik");
//     break;
//     case "B":
//         console.log("Anda lulus");
//     break;
//     case "C":
//         console.log("Anda tidak lulus");
//     break;
//     case "D":
//         console.log("Nilai jelek");
//     break;
//     default:
//         console.log("Nilai tidak Valid");
// }


// //perulangan for looping---------------------
// for (let i = 0; i <= 5; i++){
//     console.log('angka ${i}')
// }

// for (let i = 0; i <= 20; i += 10){
//     console.log('angka ${i}')
// }


// nested for----------------------------
// let temp ="";
// iterasi 1
// i = 0
// j == 1
//temp = 0 1 2 3 4
// iterasi 2
// i = 1
// j = 1
// temp = 1 2 3 4
// for (let i = 0; i < 5; i++){
//     for (let j = i; j < 5; i++) {
//         temp += j + " ";
//     }
// temp += "\n";
// }
//     console.log(temp);

// do while---------------------------------
// let counter = 0;
// while (counter < 10){
//    console.log(counter);
//    counter++;
// }

// do while----------------------------------
// let counterjuga = 0;
// do
// {
//     counterjuga++;
//     console.log(counterjuga);
// while (counterjuga < 10);
// }


// pop menghapus elemen paling belakang array-----------
// shift menghapus elemen paling depan array--------------

//let numbers = [1,2,3,4,5];
//console.log(numbers[4]);

//numbers = [10,20,30];
//console.log(numbers);

//const animals = [];
//console.log=(animals);

//animals.push("bebek");
//console.log=(animals);

//animals.push("kucing", "burung");
//console.log=(animals);

//animals.pop();
//console.log=(animals);

//animals.shift();
//console.log=(animals);

//menghitung jumlah array-------------------------------------
//let iniArray = [1,2.5, "string", true];
//console.log(iniArray);
//console.log(iniArray.length);

//multi dimensional array--------------------------
//let matrix = [
  //  [1,2,4],
   // [2,2,3],];
//console.log(matrix);

//let matrix = [
   // [1,2,4],
   // [2,2,3],];
//matrix.push([1,1,1]);
//console.log(matrix);

// let matrix = [
//  [1,2,4],
//  [2,2,3],];
// console.log(matrix[1][2]);

// let matrix = [
//   [1,2,4],
//   [2,2,3],];
// matrix[0].pop();
// console.log(matrix);

// menampilkan panjang array ditambah dengan looping-------------
// let numbers = ["20", 10, 1, 5, "20"];
// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// string-----------------------------------
//let fullName = "Ainun Amaliah";
//console.log(full.Name);
//console.log(fullName.toUpperCase());
//console.log(fullNametoLowerCase());
//console.log(fullName.replace("Ainun","Amaliah"));
//console.log(fullName.length);

// mengubah tipe data-----------------------------------
// let numStr = String(10);
// console.log(typeof numStr);

// let num1 = Number("1");
// console.log(typeof num1);

// let num2 = Number(false);
// console.log(num2);
// console.log(typeof num2);

// let boolean1 = Boolean(0);
// console.log(boolean1);

// let boolean2 = Boolean("isi");
// console.log(boolean2);

// let boolean3 = Boolean("");
// console.log(boolean3);

// function sayhello(){
// console.log("Hello world!")
// }
// sayhello();


// function sayhello(firstName,lastName) {
//     console.log('Hello, ${firstName} ${lastName}');
//     }
//     sayhello("kenji");


// return sebuah value----------------------------
//     function sayhello(name){
//         return 'hello, ${name}';
//     }
//     console.log();

    
//     function sum (a, b){
//         return a + b;
//     }
// console.log(sum(true, false));
// console.log(sum(true,null));
// console.log(sum("1","2"));
// console.log(sum(3, 2));
// console.log(sum("1", 2));


// function expression-------------------------
// let multiply = function (a, b){
//     console.log(a*b);
// };

// multiply(2,3);
// console.log(typeof multiply);

// multiply = function (c,d){
//     console.log(c/d);
// };

// multiply(20,5);

// memasukkna function di dlm parameter lain (function as value)----
// function sum (a, b);{
// return a + b;}
// function multiply(a, b){
//     return a * b;}
// let result = sum(multiply(3, 2), 5);
// console.log(result);


// let kali = mulyiply;
// let result = sum(kali(3, 2), 5);
// console.log(result);


// function multiply(a, b){
//     return a * b;}
// function sum (a, b);{
//     return a(2, b) + b;}
//     let result = sum (multiply,8);
//     console.log(result);


// RAW FUNCTION-----------------3-----------------
// const sayHello = (firstName, lastName) => {
//     console.log ('Hello, {firstName} $ {lastName}' )
// };
// sayHello("Ainunu", "Amaliah")


// RAW FUNCTION satu, YG GA AGA KURUNG KURAWAL------------
// const sayHello = (name) => 
//     console.log('Hello, ${Ainun}');
//     sayHello("Ainun");
    
// const sayHello = (name) => 'hello ${name}';
// console.log(sayHello("Ainun"));

// ----------------------------------
// const sumAll = (numbers) => {
//     let result = 0;
//     for (let i= 0; i < numbers.lenghth; i++){
//         result += numbers [i];
//     }
//     return result;
// };

// const numbers = [10,20,30];
// let hasilAkhir = sumAll(numbers);
// console.log(hasilAkhir);

//faktorial---------------------------
// let num = 10;
// function factorial(x){
//     if (x === 0){
//         return 1;
//     } else {
//         return x * factorial (x-1);
//     }
// }
// if (num > 0){
//     let result = factorial(num);
//     console.log(`faktorial dari ${num} adalah ${result}`);
// }

//OOP JAVASCRIPT---------------------------------
//atribut ban, warna, mesin, age. method menyala matikan mesin
    // const user = {
    //     firstName: "Ainun",
    //     lastName: "Amaliah",
    //     age: 27,
    //     isActive: true,
    // };

    // console.log(user.firstName);
    // console.log(user.lastName);
    // console.log(user.ageName);
    // console.log(user.isActiveName);

//bisa juga consolenya pake ini sama aja---------------
// console.log(user["firstName"]);
// console.log(user["lastName"]);
// console.log(user["age"]);
// console.log(user["isActiveName"]);

//merubah nilainnya-----------------------------
//     user["isActive"]= false;
//     user.isActive =false;
//     console.log(user);

//menambah atribut email dari luar--------------------
//     user.email ="ainunamaliah3@gmail.com";
//     console.log(user);

//"this" mendapatkan atribut, itu merefer ke parentnya (user)
// const user = {
//     firstName: "Ainun",
//     lastName: "Amaliah",
//     age: 27,
//     isActive: true,
//     sayName: function(){
//         return `Hello, ${this.firstName} ${this.lastName} yang berumur ${this.age}`;
//     },
// };

// console.log(user.sayName());

//arrow function ---------------------------------------
// const user = {
//     firstName: "Ainun",
//     lastName: "Amaliah",
//     age: 27,
//     isActive: true,
//     sayName: function(){
//         return `Hello, ${this.firstName} ${this.lastName} yang berumur ${this.age}`;
//     },
//     // sayNameArrow: () => {
//     //     return `Hello, ${this.firstName} ${this.lastName} yang berumur ${this.age}`;
//     // },

// sayHello(){
//     console.log(`Hello, ${this.firstName}`);
//     },
// };
// user.sayHello();
//console.log(user.sayNameArrow());

//class itu semacam cetakan, Car class harus huruf besar awalnya-----------
//atributnya harus pake this, this ngarah ke class car
//agar dinamis, harus diisi kontraktornya (dalam kurung)
    // function Car(brand, color){
    //     this.brand = brand;
    //     this.color = color;
    // }

    // const corolla = new Car("terios","black");
    // console.log(terios);
    
//memberikan method juga bisa startengine method dr class car dr yg diatas---------
// function Car(brand, color){
//     this.brand = brand;
//     this.color = color;
//     this.startEngine = function(){
//         console.log(`Mesin mobil ${this.brand} telah menyala`);
//     };
// }

// const terios = new Car("terios","white");
// terios.startEngine();

// menggunakan class dengan keyword class, cara baru dengan ES6----------------
// class Car{
//     constuctor(merk, warna){
//         this.brand = merk;
//         this.color = warna;
//     }

//  }
// const terios = new Car("terios", "black");
// console.log(terios);


//bisa memberikan method juga dari yg di atas------------------------------
// class Car{
//     constuctor(merk, warna){
//         this.brand = merk;
//         this.color = warna;
//     }
//     startEngine(){
//         console.log(`Mesin ${this.brand} telah menyala`);
//     }

//  }
// const terios = new Car("terios", "black");
// console.log(terios);
// terios.startEngine();


// class punya method, dan methodnya di panggil di kelas lain---------------
//funcion/methode tuneUp
//function/method openEngine
class Car{
    constructor(merk, warna){
        this.brand = merk;
        this.color = warna;
    }

    startEngine(){
        console.log(`Mesin ${this.brand} telah menyala`);
    }

    openEngine(){
        console.log(`Mobil ${this.brand} mesinnya telah dibuka`);
    }
}
class Mechanic {
    constructor(name){
        this.name = name;
    }
    tuneUp(mobil){
        mobil.openEngine();
        console.log(`Mekanik ${this.name} mengecek mobil ${mobil.brand}`);
    }
}
    const terios = new Car("terios", "black");
    const jono = new Mechanic("jono");
    jono.tuneUp(terios);

//inheritance(extends), objek Hewan dan Kucing,------------------------- 
//method/behavior berjalan, 
//atribut punya nama
//super manggil constructor(name) yang di parent
// class Hewan{
//     constructor(name){
//         this.name = name;
//     }
//     berjalan(){
//         console.log(`${this.name} sedang berjalan`);
//     }
// }
// class Kucing extends Hewan{
//     constructor(name){
//         super(name);
//     }
// }
// const kucing = new Kucing("meo");
// console.log(kucing);
// kucing.berjalan();

//merubah ke kucing, menimpa---------------------

// class Hewan{
//     constructor(){
//         this.name = hewan;
//     }
//     berjalan(){
//         console.log(`${this.name} sedang berjalan`);
//     }
//     bernafas(){
//         console.log(`${this.name} sedang mengirup udara segar`);
//     }
// }
// class Kucing extends Hewan{
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }
// const kucing = new Kucing("meo");
// console.log(kucing);
// kucing.berjalan();
// kucing.bernafas();

//past value---------------------

// let number1 = 10;
// let number2 = number1;
// console.log("number1 :", number1);
// console.log("number2 :", number2);
// number2 = 50;
// console.log("number1 :", number1);
// console.log("number2 :", number2);

//past by referenece, satunya di ubah yang lain keubah-------

// const hero1 ={
//     name:"superman",
// };
// const hero2 = hero1;
// console.log(hero1.name);
// console.log(hero2.name);
// hero2.name = "Batman";
// console.log(hero1.name);
// console.log(hero2.name);

//new vabel------------------------------------
//pas modifikasi, objek asli akan terubah car nya

// const car={
//     name:"terios",
// };

// const newCar = car;
// console.log("Car:", car);
// console.log("New Car:", newCar);

// newCar.name = "BMW";

// console.log("Car :", car);
// console.log("New Car :", newCar);

//objek asli tdk akan ikut berubah carnya------------
//pake object,Assign

// const car = {
//     name:"terios",
// };

// const newCar = Object.assign({}, car);

// newCar.name = "BMW";

// console.log("Car :", car);
// console.log("New Car :", newCar);



// sepread operator ....car,seat
// const car = {
//     name:"terios",
//     color: "white",
// };
// const newCar = {...car};
// console.log("car :", car);
// console.log("New Car :", newCar);

// newCar.name = "BMW";

// console.log("Car:", car);
// console.log("New Car :", newCar);

// sepread operator copy banyak-------------------
//objek ke objek yang baru dengan mjd memori yg berbeda
// ....car,seat
// const car = {
//     name:"terios",
//     color: "white",
//     seats: {
//         count:4,
//         type:"kulit",
//     },
// };
//const newCar = {...car, seats: {...car.seats}};
// console.log("car :", car);
// console.log("New Car :", newCar);

// newCar.name = "BMW";
// newCar.seats.type = "wood";

// console.log("Car:", car);
// console.log("New Car :", newCar);

//descructuring, objek car dijadikan variabel------ 
//yang baru yaitu name dan color

// const car = {
//     name:"terios",
//     color: "white",
//     seats: {
//         count:4,
//         type:"kulit",
//     },
//     engine: "1500cc",
// };

// const {name,color} = car; //kalo ambil name dan color
// console.log(name,color);

// const {seats:{count,type}}=car; //kalo mau ambil seats 
// console.log(count);
// console.log(type);

// const {engine,color} = car;//kalo mau ambil engine sm color aja
// console.log(engine, color);

//-----rest operator, object car, bongkar destr ambil seats sm engine
//ambil sisanya dengan ...sisa

// const car = {
//     name:"terios",
//     color: "white",
//     seats: {
//         count:4,
//         type:"kulit",
//     },
//     engine: "1500cc",
// };
// const {seats, engine, ...sisa} = car;
// console.log (sisa);

//seats destruct jadi var baru-----------------------------------------
// const car = {
//     name:"terios",
//     color: "white",
//     seats: {
//         count:4,
//         type:"kulit",
//     },
//     engine: "1500cc",
// };

//const {seats} = {...car, seats: {...car.seats}};
//hanya bisa 1 object, sebuah object sifatnya imitable
//harusnya kaya gini, object yang kita spread carnya(bener"copyannya)
//{...car}
//console.log(car);//object awal tidak berubah

//seats: {...car.seats}
//seats.count = 5;
//console.log(car);//object awal tidak berubah
//console.log(seats);//object awal berubah


//detructuring dapat membongkar nilai dari array atau property dari objek ke dalam var terpisah
// const mhs={
//     nama: 'Ainun Amaliah',
//     umur: 17,s
//     email: 'ainunamaliah3@gmail.com'
// };
// const {nama, umur, email} = mhs;//membongkar objek, n u e yang di assign ke objek mhs
// console.log(nama);//secara otomatis menjadi var terpisah yg isinya sudah mengambil dr objeknya
// console.log(umur);//umur jadi var
// console.log(email);//email jadi var


// speard operator adalah sebuah operator yg memecah (expand/unpack) iterables (banyak isinya contoh string, array) menjadi single element.
// memecah array
//     const mhs = ['ainun','amaliah','anissa','yunita'];
//     console.log(...mhs);

// //memecah string----------------------------------------
//     const mhs = ['ainun','amaliah','anissa','yunita'];
//     console.log(...mhs[0]);

//spread operator dapat digunakan untuk menggabungkan 2 array-----
//     const mhs = ['ainun','amaliah','anissa','yunita'];
//     const dosen = ['juleha','turkiyem','ratih','maemunah'];
//     const orang = [...mhs,...dosen]
//     console.log(orang);

//spread operator dapat digunakan untuk megcopy array-----------
    //const mhs = ['budi','amaliah','anissa','yunita'];
   // const mhs1 = mhs;//gabisa kaya gini, ini artinya membuat referensinya
    //mhs1[0]='fajar'//menimpa budi dengan fajar, 
    //console.log(mhs1);//harapannya yg berubah hanya array mhs1 saja
    //console.log(mhs);//array mhs ikut"an berubah juga, pdhl yg kita mau arry copyannya yg berubah

    //const mhs1 = [...mhs];//harusnya kaya gini, array yang kita spread mhsnya(bener"copyannya)
    //mhs[0]='fajar'
    //console.log(mhs1);//array berubah
   // console.log(mhs);//array awal tidak berubah

//rest parameter sesuatu yang merepresentasikan argumen pada function dengan jumlah yang tidak terbatas menjadi sebuah array
//tangkap banyak argumen yg tdk terbatas untuk menjadi sebuah array


//array spread------------4-----------------------------
// let numbers1 = [1,2,3];
// let numbers2 = [...numbers1];
// console.log("Numbers 1:", numbers1);
// console.log("Numbers 2:", numbers2);
// numbers2[0] = 5;
// console.log("Numbers 1:", numbers1);
// console.log("Numbers 2:", numbers2);

//array desctururing------------------------------------
// let arr = ["2",54,57,7,9];
// let [a,b,bebas]=arr;
// console.log(typeof a);//ambil jenisnya
// console.log(a,b,bebas);//ambil nilai

//array rest---------------------------------------------
// let [a,b,terserah, ...sisa] = arr;
// console.log(typeof a);
// console.log(sisa);


//pure, function, tidak merubah data yang sudah ada,------------------------
//objek kirim ke parameter datanya tidak beubah
const x = 2;//data aslinya
const y = 3;

function sum(a,b){
    return a+b;
}
const z = sum(x,y);
console.log(`ex: ${x}, ye:${y}, zet:${z}`);

//inpure,merubah data yang sudah ada,-------------------------------
//objek kirim ke parameter datanya beubah
// const obj = { x:2, y:3, z:0};//data aslinya z = 0

// function sumObj(obj){
//     obj.z = obj.x + obj.y;//data aslinya z = 5 
//     return obj;
// }
// const result = sumObj(obj);
// console.log("Result:", result);
// console.log("obj:", obj);

//map itu pure, tidak merubah nilai aslinya------------------
//bisa menerima parameter, meloop setiap itemnya, 
//item dikali 2 dan akan mendapatkan item
// let arr =  [2,54,57,7,9];
// console.log("Before:", arr);
// let itIsMap = arr.map((item) => item * 2);
// console.log("after:", arr);
// console.log ("itIsMap :", itIsMap);

//push, inpure,merubah nilai asli array yang sebelumnya------
//nambah angka 5
//let arr =  [2,54,57,7,9];
// console.log("before:", arr);
// let itIsPush = arr.push(5);
// console.log("after:", arr);

//filter, memfilter item array yang dimiliki-------------------
//ambil nilai selain lebih besar 50
// let arr =  [2,54,57,7,9];
// console.log("before:", arr);
// let itIsFilter= arr.filter((item) => item > 50);
// console.log("after:", arr);
// console.log("itIsFilter:", itIsFilter);

//filter selain array index 1
// let arr =  [2,54,57,7,9];
// console.log("before:", arr);
// let itIsPush = arr.filter((item) => item != arr[1]);
// console.log("after:", arr);
// console.log("itIsPush:", itIsPush);


