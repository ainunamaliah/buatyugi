class Motorcycle {
    constructor(plateNumber, brand, color, owner) {
      this.plateNumber = plateNumber;
      this.brand = brand;
      this.color = color;
      this.owner = owner;
    }
  }
  
  const supra = new Motorcycle("B 5521 AV", "Supra", "Black", "Jono");
  const ninja = new Motorcycle("F 4402 VE", "Ninja", "Black", "Udin");
  const nmax = new Motorcycle("F 6872 SK", "NMAX", "Gray", "Dito");
  const jupiter = new Motorcycle("B 1234 SE", "Jupiter", "Red", "Joko");
  const vario = new Motorcycle("D 1329 MW", "Vario", "Blue", "Wati");
  const beat = new Motorcycle("B 7894 LA", "Beat", "White", "Jono");
  const scoopy = new Motorcycle("E 2944 WQ", "Scoopy", "Brown", "Eka");
  const pcx = new Motorcycle("D 2343 EW", "PCX", "White", "Heri");
  const mio = new Motorcycle("B 0211 VW", "Mio", "Blue", "Dina");
  
  const motorcycles = [supra, ninja, nmax, jupiter, vario, beat, scoopy];
  

//cari semua motor yang berwarna hitam
console.log ("1:", motorcycles.filter((motor) => motor.color == "Black"));
console.log(motorcycles)

//cari motor pertama yang berplat nomor F dalam list
console.log ("2",motorcycles.find((motor) => motor.plateNumber == "F"));

//cari motor pertama yang dimiliki oleh jono dalam list
console.log ("3:",motorcycles.filter((motor) => motor.owner == "Jono"));

//ubah urutan motor dalam array menjadi sebaliknya
let motorcyclestoreverse = [...motorcycles]
console.log("4:",motorcycles.reverse());

//semua motor yang berplat B
console.log("5:",motorcycles.filter((motor) => motor.plateNumber[0] === "B"));

//tambahkan motor pcx setelah ninja dan sebelum nmax
motorcycles.splice(2,0,pcx);
console.log("6:",motorcycles);

//tambahkan motor pcx setelah jupiter dan sebelum vario tanpa merubah motocycles
let motorPush = motorcycles.splice(4,0,pcx);
console.log("6:",motorcycles);

//replace motor beat menjadi mio
let motorPushmio = motorcycles.splice(5,1, mio);
//index ke ...
//nambah 1
//mio, data yg mau dimasukin
console.log("7:",motorcycles)
