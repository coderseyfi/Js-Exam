// 1)+
// 2)+
// 3)+
// 4)+
// 5)+
// 6)+
// 7)+
// 8)+
// 9)+
// 10)+
// 11)+
// 12)+
// 13)n = 7
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 14) a = 4, b = 5
// * * * *
// *     *
// *     *
// *     *
// * * * *
// 15) Fibonacci sequence-ni recursion ile edin 
// 16) ES6 ve ondan sonrakilar nədir?
// 17)Closure funksiyası haqqında ətraflı məlumat yazın.(misal verin)
// 18)Hoisting dedikdə nə başa düşürsüz?
// 19)HOF nəyə deyilir?
// 20)Callback nədir?
// 21)Data types neçə dənədir və hansılardır?
// 22)Let ve const fərqi nələrdir?
// 23)Recursion funksiya nədir və if else olmadan yazmaq mümkündür?
// 24)SetTimeout() asinxron yoxsa sinxron funksiyadır ? Ve misal ile izah edin
// 25)Hansı method arrayı string’e çevirir?



// TODO 1: Prompdan daxil olan ədədin faktorialini tapin
// let a = +prompt('enter a number')

// function factorial(a) {
//     if (a == 0) {
//        return 1;        
//     }
//     else{
//         return a * factorial(a-1)
//     }
// }

// console.log(factorial(a))




//todo 2: Arraydaki ededleri kicikden boyuye duz +++
// let arr3 = [1,23,4,52,11,6,7,-2]
// for (let i = 0; i < arr3.length; i++) {
//     for (let j = 0; j < arr3.length; j++) {
//           if (arr3[i]<arr3[j]) {
//             [arr3[i],arr3[j]] = [arr3[j],arr3[i]]
//           }        
//     } 
// }
// console.log(arr3)



//todo 3: Arraydaki sadə ədədləri göstərin
// let arr4 = [11, 23, 4, 52, 11, 6, 7, 2]
// for (let i = 0; i < arr4.length; i++) {
//     let counter = 0;
//     let x = arr4[i]
//     for (let j = 1; j <= x; j++) {
//         if (x % j == 0) {
//             counter++;
//         }
//     }
//     if (counter === 2) {
//         console.log(x)
//     }
// }


//todo 4: Stringdə olan saitleri ve onlarin sayini tapin
// let arraySait = ['a','e','o','i','u','ü','ı','ə']
// let word = 'salam'

// function findSait(word,arraySait){
//     let counter = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i]) {

//         }
//     }
// }



//todo 5: Promptdan n sayda ədəd daxil olacaq daxil olunan ədədlər arasinda ən böyüyü tapin+++
// let a = prompt("nece dene eded daxil edessiz")
// let b = []
//  for (let i = 0; i < a; i++) {
//    b[i] = prompt("daxil et")
// }
// console.log(Math.max(...b))





//todo 6: Verilən cümlədə bütün sözlerin baş hərfini böyüdün+++
//  let arr = ["salam", 'hello', 'yowudoin']
//  function toCapitalize(arr) {
//    for (let i = 0; i < arr.length; i++) {
//      let s = arr[i].charAt(0).toUpperCase();
//      cap_str = s + arr[i].slice(1)
//      console.log(cap_str)
//    }
//  }
//  toCapitalize(arr)


//todo 7: daxil olunan ededden sonraki sade eded
// let num = prompt("eded daxil edin");
// function simpleNum(num) {
//     let i = +num + 1
//     while (true) {
//         let counter = 0;
//         for (let j = 1; j <= i; j++) {
//             if (i % j == 0) {
//                 counter++
//             }
//         }
//         if (counter == 2) {
//             return i;

//             i++
//         }
//     }
// }


//todo 8: Verilən array sonu 9 bitən ədəd varmi? Varsa True, yoxsa False ekrana cixardin+++
// let arr8 = [32, 23, 76, 21, 11, 2, 7, 1]
// function findLast() {
//     for (let i = 0; i < arr8.length; i++) {
//         if (arr8[i] % 10 == 9) {
//             return true
//         }
//     }
//     return false
// }
// console.log(findLast())




//todo 9: Daxil etdiyimiz array-de neçə cüt element var. Bunu tapan funksiya yazin+++
// let arr9 = [12, 3, 11, 7, 4, 22, 8]
// function findEven() {
//     let counter = 0;
//     for (let i = 0; i < arr9.length; i++) {
//         if (arr9[i] % 2 == 0) {
//             counter++;
//         }
//     }
//     console.log(`Cut ededlerin sayi : ${counter}`)
// }
// findEven()



// TODO: 10. Array icersine 0-9 kimi reqemler var, hansisa bir reqem catmir tap+++
// let arr = ['0','1','2','3','4','6','7','8','9']
// function emptyNum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i].trim() != i) {
//             return console.log(`bosh olan eded : ${i}`)
//        }
//     }
// }
// emptyNum(arr)


//todo: 11 Daxil olunan  stiringin ilk hərfini böyüyə çevir+++
// let input = 'hello'
// let s = input.charAt(0).toUpperCase();
//      cap_str = s + input.slice(1)
//      console.log(cap_str)


// todo : 12 Arrayda forla ədədləri 5 vahid artirmaq++
// let arr12 = [1,2,3,4,5]
// for (let i = 0; i < arr12.length; i++) {
//     let add = arr12[i] + 5
//     console.log(add)
// }


//todo : 13 n=7
// let n = 7
// let str = ""
// for (let i =1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//      str = str + j + " "
//   }
//    str = str + "\n"
// }
// console.log(str)

// todo: 14 14) a = 4, b = 5
//  * * * *
//  *     *
//  *     *
//  *     *
//  * * * *

// let a = "";
// function star() {
//   for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 4; k++) {
//       if (i == 0 || i == 4 || k == 0 || k == 3) {
//         a += "* ";
//       } else {
//         a += "  ";
//       }
//     }
//     a += "\n";
//   }
//   console.log(a);
// }
// star();

//todo 16: ES6 ve ondan sonrakilar nədir?
/* Bunlar ecma scriptin versiyalaridir 
ES1,ES2 .. ES5 ve hal hazirki versiyadan istifade edirik ES6
Buna misal let keywordunun ES6 da support olunmasidi
Daha sonrakilar ise ES7,ES8 ve s.
*/

//todo 17:  17)Closure funksiyası haqqında ətraflı məlumat yazın.(misal verin)
/*
Buna misal olaraq iki funksiya var ve bir funksiya diger funksiya daxilinde cagirilbas 
hemin  funksiya oz deyerini itirmir yeni lexical scope daxilindedirse
*/

//todo 18: Hoisting dedikdə nə başa düşürsüz?
/*Hoisting dedikde meselen bir funksiyanin icrasinnan evvel 
o funksiyanin cagirilmasidir meselen

setFilter(); // cagirilib hoist olunub

function setFilter(){
    setTimeOut(()=>{
        console.log('hello')  ===> Funksiyanin icrasi bodysi
    })
};
*/


//todo 19 :HOF nəyə deyilir?
/* Higher order function acilishi 
bashga funksiyani parametr kimi qebul eden funksiya */


//todo 20: Callback nədir?
//callback bashga funksiyaya parametr kimi oturlen func a deyilir

//todo 21: data types neçə dənədir və hansılardır?
/*
Umumilkde 2 data novu var primitive ve non primitive 
referans objectde deyilir primitiv data novleri string boolean
symbol number bigint undefiend null

referance ise object function array 

*/

//todo 22
// Let ve const fərqi nələrdir?
//const ile deyisen teyin edilen zaman ona mutleq deyer assign elemey lazimdi
//let de ise deyer tein etmesende  olar

//todo 24
// 24)SetTimeout() asinxron yoxsa sinxron funksiyadır ? Ve misal ile izah edin
// asinxron funksiyadi



//todo 25
//Hansı method arrayı string’e çevirir?
//join ile