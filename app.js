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