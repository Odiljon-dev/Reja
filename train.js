// // console.log("train task ishga tushdi!");
// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", //0-20
//   "togri boahliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalani qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yo'q", // 60
// ];

// Callback function - bu boshqa funksiyaga argument sifatida beriladigan funksiya
// Asosan natija tayyor bo‘lganda yoki biror ish tugagach chaqiriladi
// Ko‘pincha err va data qaytarish uchun ishlatiladi: callback(err, data)

//CALLBACK FUNCTION

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", "null");
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//     setTimeout(function () {
//       callback(null, list[5]);
//     },);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// console.log("passed here 1");

//ASYNC FUNCTION
// async function maslahatBering(a, callback) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     //     // return list[5];

//     return new Promise((resolve, reject) => {
//       setTimeout(function () {
//         resolve(list[5]);
//       }, 1000);
//     });
//   }
// }

//then/catch
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("javob:", err);
//   });

// console.log("passed here 1");

// async/await

// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// Async function bu - ichida "asinxron" (ya'ni kutib turiladigan) kod ishlatiladigan funksiya
// Bunday funksiyalar "Promise" qaytaradi
//"await" bu - "kutib tur" degani
// U faqat "async" funksiyaning ichida ishlaydi
// Masalan, serverdan ma'lumot kelishini kutish uchun
//"fetch" funksiyasi serverga so‘rov yuboradi va "Promise" qaytaradi
// "await" bilan biz natija tayyor bo‘lguncha kutib turamiz
// Xatolik bo‘lsa uni tutib olish uchun "try/catch" ishlatiladi

//////////////////////////////////////////////////////
function countLetter(e, engineer) {
  let count = 0;
  for (let i = 0; i <= engineer.length; i++) {
    if (engineer[i] == e) {
      count++;
    }
  }
  return count;
}

// Misol:
console.log(countLetter("e", "engineer"));

////////////////////////////////
//B-TASK
function stringHisob(string) {
  //B yerda funksiya orqali bitta "string" nomli parametr ochib oldim
  let counter = 0; // Bu yerda variable counterni 0 ga tenglab oldim
  for (let i = 0; i <= string.length; i++) {
    // for sintaksisi bu yerdagi stringlarni ko'rib chiqadigan qildim ya'ni [i] ni
    if (string[i] >= "0" && string[i] <= "9") {
      // shart berdim agarda 9 strindan teng yoki katta bo'lsa hamda string 0 dan katta yoki teng bo'lsa
      counter++; // uni 1 tadan qosh deb kiritdim
    }
  }
  return counter; // Bu yerdagi raqamlarni tekshirib return qiladigan qildim
}

console.log(stringHisob("j0kx3v4v8vc2bv6vj9")); //log qilib funksiyani chaqirdim keyin natijani consolega chiqardim
