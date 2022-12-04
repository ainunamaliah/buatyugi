// menerima 2 buah parameter, sinkronus jalan duluan-----
// console.log("selamat datang")//sinkronus

// setTimeout(() => { //asinkronus
//     console.log("terimakasih sudah mampir, silahkan datang kembali");
// }, 3000); //3detik baru di panggil

// console.log("ada yang bisa dibantu?")//sinkronus


//-----------------------------------------------------
// const orderCoffee = () => {
//     let coffee = null;//sinkronus 

// console.log("sedang membuat kopi, silahkan tunggu..");//sinkronus

// setTimeout(() =>{ //asinkronus, callback
// coffee = "kopi mantan";
// console.log(coffee,"sudah jadi");
// }, 
// 3000);//asinkronus

// return coffee;//null
// };

// const coffee = orderCoffee();
// console.log(coffee);//null terus jananin ke asinkronus

//callback function , dipanggil kembali------------------- 
//setelah proses asingkrinos selesai dijalankan
const orderCoffee = (cb) => {//callback barista wati
    let coffee = null;//sinkronus berubah jadi kopi mantan

console.log("sedang membuat kopi, silahkan tunggu..");//sinkronus

setTimeout(() =>{ //asinkronus, callback
coffee = "kopi mantan";
cb(coffee);
}, 
3000);//asinkronus
};

function jono(coffee){ //jonocb
    console.log(`halo saya jono, ${coffee} anda sudah siap,silahkan menikmati`);
}
function wati(coffee){//waticb
    console.log(`halo saya wati, ${coffee} anda sudah siap,silahkan menikmati`);
};
orderCoffee(wati);


//callback banyak dipanggil kembali------------------- 
// const orderCoffee = (pesanan, cb) => {//2 parameter callback
//     let coffee = null;//sinkronus berubah pesanan

// console.log("sedang membuat kopi, silahkan tunggu..");//sinkronus

// setTimeout(() =>{ //asinkronus, callback
// coffee = pesanan;
// cb(coffee);//cb manggil lagi coffe, coffe itu apa?pesanan
// }, 
// 3000);//asinkronus
// };

// function jono(coffee){ //jonocb
//     console.log(`halo saya jono, ${coffee} anda sudah siap,silahkan menikmati`);
// }
// function wati(coffee){//waticb
//     console.log(`halo saya wati, ${coffee} anda sudah siap,silahkan menikmati`);
// }

// orderCoffee("kopi Mantan", (pesanan) => {// kasih cb
// wati (pesanan);//wati meneriman pesanan
// orderCoffee("kopi Janda", (pesanan) => {//pesankopi lagi
//     jono (pesanan);
//     orderCoffee("kopi Pacar", (pesanan) => {//pesankopi lagi
//         wati (pesanan);
//         orderCoffee("kopi kamu", (pesanan) =>{//pesankopi lagi
//             wati (pesanan);
//         });
//     });
// });
// });

//