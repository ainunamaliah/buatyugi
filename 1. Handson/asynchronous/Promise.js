//responnya, janji bisa terpenuhi berhasil terpenuhi atau gagal terpenuhi
//bersifat pending(dalam proses janjinya), fullfill(janji terpenuhi), rejected(gagal terpenuhi)
//promise adalah object, objek yang digunakan untuk mwmbuat sebuah proses berjalan secara asyncronus
// harus punya 2 parameter function
//kondisi fullfil dan reject
//contohnya mengambil API

    // const executorFunction = (resolve, reject) =>{//paramater resolve dan reject
    // const isCoffeMakerReady = true;
    // if (isCoffeMakerReady){
    //     resolve("kopi berhasil dibuat");//mengirim data ke function resolve, maka akan jadi fullfill
    // } else {
    //     reject("Mesin kopi tidak digunakan");
    //     }
    // };

    // const makeCoffee = () => {
    //     return new Promise (executorFunction);//panggil executor promise, asinkronus
    // };
    // const coffeePromise = makeCoffee();
    // console.log(coffeePromise);

//.then untuk handle promise
//callback function
// heandle resolve, dan reject
    // const stock = {//4
    //     coffeBeans: 20,//1
    //     water: 1000,
    // };

    // const checkStock = () => {//1
    //     return new Promise((resolve, reject) => { //3 new promise,
    //         // kondisinya pending
    //     if (stock.coffeBeans > 20 && stock.water > 300){
    //         resolve([true,false, {},"stok cukup. bisa membuat kopi"]);//5
    //     } else {
    //         reject("stok tidak cukup");//5
    //     }
    //     });
    // };

    // const handleResolve = (resolvedValue) => {//7
    //     console.log(resolvedValue); };

    // const handleReject = (rejectReason) => {//7
    //     console.log(rejectReason); };

    //5 chcekstock func asinkronus, kemudian kita resolve atau reject sesuai kondisi
    //checkStock().then(handleResolve, handleReject);

//---------------------------------
        //     const data = {};
        //     checkStock()
        //     .then(
        //         (message) => {
        //             data.message = message;
        //             console.log("resolve:", message);
        //     },
        //     (error) => {
        //         console.error("reject 1:", error);
        //         throw error;
        //     }
        //     )
        //     .catch((error) => {
        //         console.error("reject 2:", error);
        //     });

        // console.log(data);  


//scaning promise
//dilakukan secara berurutan memastikan
    const state= { 
            stock : { //1
                coffeBeans: 20,
                water : 300,
            },
        };

        const janji = new Promise ((resolve, reject) => {}); //3 new promise,
        // kondisinya pending
            
        const checkStock = () => {
        return new Promise((resolve, reject) => { 
            setTimeout(() => {
            if (state.stock.coffeBeans > 20 && state.stock.water > 300) {//2
                resolve("stok cukup. bisa membuat kopi");
            } else {
                reject("stok tidak cukup");
            }
            }, 1500);
        });
    };

        const brewCoffee = () => {//7
            return new Promise ((resolve, reject) => {
            console.log("sedang membuat kopi anda...");
            setTimeout(() => {
                resolve("kopi sudah siap");
            }, 2000);
        });
    };

    const checkAvaliability = () => {
        return new Promise ((resolve, reject) => {//1
        console.log("mesin kopi siap digunakan.");
            setTimeout(() => {
            if (!state.isCoffeMachineBusy){
            resolve("kopi sudah siap");
            } else {
                reject("maaf, mesin sedang sibuk");
            }
            }, 1000);
        });
    };

    // checkAvaliability()//1ketersediaan
    // .then((value) => {//2kembliin
    //     console.log(value);
    //     return checkStock();//3check kembaliin
    // })
    // .then((value) => {
    //     console.log(value);
    //     return brewCoffee();
    // })
    // .then((value) => {
    //     console.log(value);
    // })
    // .catch((message) => {//4jika mengalami reject kan di tanggap catch
    //     console.log(message);
    // });


//promise All, cara cepat jalanin checknya secara bersamaan
    Promise.all
        ([checkAvaliability(),checkStock(),brewCoffee()])
        .then((data) => {
        console.log(data);
    })
    .catch((message) => {
        console.log(message);
    });

//