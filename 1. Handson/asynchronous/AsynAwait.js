//penulisan yang berbeda aja dari promise
// const state= { 
//     stock : { //1
//         coffeBeans: 100,
//         water : 1000,
//     },
// };

// const janji = new Promise ((resolve, reject) => {}); //3 new promise,
// kondisinya pending
    
// const checkStock = () => {
// return new Promise((resolve, reject) => { 
//     setTimeout(() => {
//     if (state.stock.coffeBeans > 20 && state.stock.water > 300) {//2
//         resolve("stok cukup. bisa membuat kopi");
//     } else {
//         reject("stok tidak cukup");
//     }
//     }, 1500);
// });
// };

// const brewCoffee = () => {//7
//     return new Promise ((resolve, reject) => {
//     console.log("sedang membuat kopi anda...");
//     setTimeout(() => {
//         resolve("kopi sudah siap");
//     }, 2000);
// });
// };

// const checkAvaliability = () => {
// return new Promise ((resolve, reject) => {//1
// console.log("mesin kopi siap digunakan.");
//     setTimeout(() => {
//     if (!state.isCoffeMachineBusy){
//     resolve("kopi sudah siap");
//     } else {
//         reject("maaf, mesin sedang sibuk");
//     }
//     }, 1000);
// });
// };

//         //cara lama promise, usah pake ini-
//         // getCoffee().then((value)=> {//untuk mendapatkan nilai
//         // console.log(value)});


// async function makeCoffee(){//menjalankan secara asyn
//     const mesin = await checkAvaliability();//supaya const berjalan secara syn di dlm asyn
//     const stock = await checkStock();
//     const brew = await brewCoffee();    
//     console.log(mesin, stock, brew);
// }
// makeCoffee();