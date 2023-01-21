//let a = "Aziz Kerimov"

// console.log(a.slice(0,2));
// console.log(a.split(" "));
// console.log(a.trim());
// console.log(a.length);
// console.log(a.toLowerCase());
// console.log(a.toUpperCase());
// console.log(a.indexOf("z"));
// console.log(a.concat("salam"));
// console.log(a.replaceAll("z","t"));
// console.log(a.replaceAll(/a|i/g,"*"));
// console.log(a.charAt(2));
// console.log(a.startsWith("A"));
// console.log(a.endsWith("v"));
// console.log(a.repeat(2));
// console.log(a.substring(5,1));
// console.log(a.match("o"));
// console.log(a.search("o"));
// console.log(a.includes("y"));
// console.log(a.padStart(100,"*"));
// console.log(a.padEnd(100,"z"));
// console.log(a.lastIndexOf("z"));
// console.log(a.localeCompare("Aziz"));
// console.log(a.substr(5,10));




// HOMEWORK

// TASK 1
// POLINDROM OR NOT POLINDROM


//let str = "1000110001221000110001";

// let arr=str.split("")


// for (let i = 0; i < arr.length/2; i++) {
//   if (arr[i] === arr[arr.length - 1 - i]) {
//     console.log("polindrom");
//   }
//     else{
//         console.log("polindrom deyil");
//     }

// }


// FUNCTIONS

// REGULAR FUNCTIONS
// ARROW FUNCTIONS


// 1) REGULAR FUNCTION

// 1.1) DECLARATION FUNCTION
// 1.2) EXPRESSION FUNCTION

// DECLARATION FUNCTION

// function sayHello() {
//     console.log("salam")
// }

// EXPRESSION FUNCTION
// ANNONYMOUS FUNCTION

// let myFunc = function () {
//   console.log("salam");
// };


//  DECLARATION

// function sayHello() {
//   console.log("salam");
// }


// INVOKED
// sayHello();

// initial value name='test'

// function sayMyName(name,surname='Bosdur',age) {
//     console.log(`${name} ${surname} ${age}`);
// }

// sayMyName("Ali","Almammadov")
// sayMyName("Eziz","Kerimov")

// let expFunc = function (name, surname = "Bosdur", age) {
//   console.log(`${name} ${surname} ${age}`);
// };

//  expFunc("Ali","Almammadov",30)


// FUNCTION RETURN

// function handleSum(num1,num2) {
//     num1 = num1 + 1;
//     num2 = num2*2;
//     return num1+num2;
// }

// console.log(handleSum(5, 4));

// const expFunc2 = function(name){
//     return `adiniz ${name}`
// }

// console.log(expFunc2("Zerengul"));


// PURE FUNCTION

// function pureFunc(a) {
//     let b = 2
//     return a+b
// }

// console.log(pureFunc(1));


// FUNCTIONS
// OBJECTS
// ARRAY


//        14.01.2023


// //CLOSURE
// let test = 6;
// function outVar (a) {
//     let x = 5;
//     return function (b){
//         let x2=6
//     // PURE FUNCTION
//         return function (c) {
//             return a+b+c+x2+test
//         }
//     }
// }

// //  CURRYING
//  console.log(outVar(3)(4)(1))


// FUNCTION LOOP -> RECURSIVE FUNCTION

// function countDown(fromNumber) {
//   console.log(fromNumber);

//   if (fromNumber - 1 > 0) {
//     countDown(fromNumber - 1);
//   }
// }
// countDown(10);


// function countDown(param) {
//   console.log(param);
//   param++;

//   if (param <= 10) {
//     countDown(param);
//   }
// }

// countDown(5);


// 1 1 2 3 5 8 13 21 34 55 ...

// let x = 0;
// let y = 1;

// function Fibonacci (limit) {
//         console.log(x)
//         let sum = x+y;
//         x=y;
//         y=sum
//     if(x<limit) {
//         Fibonacci(limit)
//     }
// }

// Fibonacci(100);

//  CALLBACK FUNCTION

// function x(y) {
//     return y
// }

// function sayHello() {
//     console.log('salam');
// }

// console.log(x(sayHello()));

//  HIGHER ORDER FUNCTION

// DAXILINE CALLBACK QEBUL EDEN FUNKSIYALAR

// function x(a,b,c) {
//     return a+b+c
// }

// // CALLBACK FUNCTION
// function sum(z) {
//     return z
// }
// console.log(x(1,2,sum(5)))


// NESTED FUNCTION
// CLOSURE
// HIGHER ORDER FUNCTION

// let Exception = function(typer)
// {
//     return 'sehv type value daxil etmissiniz'
// }

// function x(a,b,callback=Exception) {
//     return callback(a,b); 
// }

// function sum (d,e) {
//     return d+e
// }

// //console.log(x(3,2,sum))
// console.log(x(3,2,sum))









// OBJECTS


// let Imran = {
//   name: "Imran",
//   surname: "Hatefi",
//   age: 250,
//   colorList: {
//     white: "#fff",
//     black: "#000",
//   },
//   experience: [
//     {
//       company: "Pashabank",
//       duration: 2,
//       position: "Full stack Developer",
//       stack: "Java , React",
//       previlege: "Senior",
//     },
//     {
//       company: "Mcdonalds",
//       duration: 1.5,
//       position: "Frontend Architech",
//       stack: "React",
//       previlege: "Senior",
//     }
//   ],
//   aboutInfo:function() {
//     return `About : ${this.name} ${this.surname}`
//   },
//   totalExp:function(){
//     let total = 0;
//     for (let i = 0; i < this.experience.length; i++){
//         total = total + this.experience[i].duration
//     }
//     return `Total experience : ${total}`;
//   }
// };

// console.log(Imran.totalExp());

// // DOT NOTATION
// console.log(Imran.surname);

// // OBJECT LITERAL
// console.log(Imran['surname']);







// -------------------------- 17.01.2023 --------------------------

// function letterCounter(word, letter) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word.charAt(i).toLowerCase() === letter.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(letterCounter("zErengul", "E"));

//  TASK

//   1) User promtla sifarisi yazacaq
//   fri/mcdonalds/2
//   fri , burger , twister
//   mcdonalds , kfc , burger king
//   fri / 3 / 5 / 1
//   DONT USE IF
//   
//   1) user sifaris daxil edir
//   2) restoran teyin olunur sirafisi qebul edir
//   3) kuryer sifarisi qebul etmelidir
//


// //let arr = ["imran",'seyid',2,{name:"eltac"},true,null]
// let x = [3,43,5,6,]

// // PUSH , POP , SHIFT , UNSIFT

// // ADD LAST
// x.push(3);

// // DELETE LAST
// x.pop();

// // ADD FIRST
// x.unshift('ali')

// // DELETE FIRST
// x.shift()

// console.log(x)

// DESTRUCTION
/*let x = [1,2,'imran','ali']
// let salam = x[2]
let [ferid,salam,z,ali] = x*/

// REST OPERATOR
/*let x = ['salam',2,4,56,true,null]
let [ilk,imran,...newArr] = x;
let [...newArr,ilk,imran] = x; bele olmaz
console.log(newArr)*/

 // SPREAD OPERATOR
/*  let x = [2,4,true,null];
  let y = ['ali','sahin',...x]
  console.log(x)
  console.log(y)*/

// slice
/*let x = [1,2,4,87,12,3]
console.log(x.slice(5,2))*/

//splice

// At position 2, add 2 elements: 
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi")
console.log(fruits)*/

// SORT
//let x = [2,11,3,1,5,10]
//console.log(x.sort())
/*x.sort((a,b)=> a-b)
console.log(x)*/
/*let x = ['a','baba','alma']
console.log(x.sort())*/

// REVERSE
/*let x = [2,3,4,5]
console.log(x.reverse())*/

// FIND
/*let x = [1,'a',2,4,'salam',4];
let y = x.find((e)=>{
    return e===4
})
console.log(y)*/

// FILTER
// let x = [1,'a',2,4,'salam',4];
// let y = x.filter((e)=> {
//     return e===4
// })
// ARROW FUNCTION
// IMPILICTID RETURN
// let y = x.filter(e=> e===4)
// console.log(y)

// FOREACH
// don't create new array
/*let x = [1,2,3,4,5];
x.forEach(e=>{console.log(e)})*/

// MAP
// create new array
/*let x = [1,2,3,4,5];
let y = x.map(e => e*200);
console.log(y)*/

/*let x = [1,2,3,4,5];
let y = x.map(e=>{
    return e+"a"
})
console.log(y)*/

// JOIN
/*let x = ['a','l','m','a'];
console.log(x.join(""))*/

// CONCAT
/*let x = [1,2,3];
let y = [5,6];
let c = x.concat(y)
console.log(c)*/


/*let x = [1,'sala',2];

let y = x.map(e=>{
    if(typeof e == 'string') {
        return e+"m"
    }
    return e
})

console.log(y)*/



// HOMEWORK

//let arr = [1,2,3,4,5]
//let emptyArr = []

// arr.forEach(e => emptyArr.push(e));
// console.log(emptyArr);

// const newArrMap = arr.map(e=> e);
// console.log(newArrMap);

// let empArr = [];
// for (let i = 0; i < arr.length; i++) {
//     empArr.push(arr[i])
// }
// console.log(empArr)

// let newArr = [...arr]
// console.log(newArr)

// let newArr = JSON.parse(JSON.stringify(arr))
// console.log(newArr)

// let x = Array.from(arr)
// console.log(x)

// -----------------------------
// const arr=[1,5,10,-5,-3,0,8,81,92]
// arr.sort(function(a,b){
//     return b-a 
// });
// console.log(arr)


// const arr = [1, 5, 10, -5, -3, 0, 8, 81];
// let a =[];
// for (let i = 0; i< arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {    
//         if (arr[i]>arr[j]) {
//             let x = arr[i];
//             arr[i]= arr[j];
//             arr[j]=x;        
//         }      
//     }
//     }
// console.log(arr);


// let x = [1,2,3,4,5]
// let delArrEl = (array = [], element) => {
//   return array.filter((item) => item !== element);
// };
// console.log(delArrEl(x,2))

// let x = [1, 2, 3, 4, 5];
// x[100] = "Zamir"
// console.log(x[35])

//let x = [1,3,5,7,9]
// let sum = 0
// x.forEach(item => sum+=item)
// console.log(sum);

// let y = x.reduce((vusal,a)=> vusal+a,5)
// console.log(y)

// let x = [1,3,5]
// let y = x.reduce((sum, e, i)=> sum+e+i,0);
// console.log(y)


// OBJECT

// let ali = {
//     name:"Ali",
//     surname:"Almammadov",
//     age:33,
//     1:"salam"
// }

// delete ali["1"];
// console.log(ali)


//  DOT NOTAION
// console.log(ali.name);

// OBJECT LITERAL
// console.log(ali['name']);

// console.log(Object.keys(ali))
// console.log(Object.values(ali));
// console.log(Object.entries(ali))

// let obj1 = {
//     name:"Eziz",
//     surname:"Kerimov"
// }
// let obj2;
//obj2 = obj1;

// 1
//obj2 = {...obj1}
// 2
//obj2 = JSON.parse(JSON.stringify(obj1))
//console.log(obj1)
//console.log(obj2)

// let links = {
//     facebook:"FACEBOOK",
//     intagram:"INSTAGRAM",
//     twitter:"TWITTER"
// }

// let x = (x)=>{
//     return links[x] ? links[x] : "salam"
// }

// let z = 'twittersakfuhsd'
// console.log(x(z));



























