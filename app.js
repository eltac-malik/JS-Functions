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


//   26.01.2023


// let x = 'eltacmalik';
// let y = {};
// let arr = x.split("");

// arr.forEach(i=>{
//     {y[i] = (y[i]||0)+1}
// })
// console.log(y)


// Groups anagram
//let x = ['eat','tea','tae','ate','bat']
// [['eat,'tea','tan','ate'],'bat']

// FUNCTIONAL CONSTRUCTOR
// function Person(_name,_surname){
//     this.name = _name;
//     this.surname = _surname
// }
/*let vusal = new Person("Vusal","Valiyev")
let eltac = new Person("Eltac","Malik")
console.log(vusal)
console.log(eltac)*/

// let User = function (firstName, lastName, email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
// }

// let UserBuilder = function () {

//     let firstName;
//     let lastName;
//     let email;
//     return {
//         setFirstName: function (firstName) {
//             this.firstName = firstName;
//             return this;
//         },
//         setLastName: function (lastName) {
//             this.lastName = lastName;
//             return this;
//         },
//         setEmail: function (email) {
//             this.email = email;
//             return this;
//         },
//         info: function () {
//             return `${this.firstName} ${this.lastName}, ${this.email}`;
//         },
//         build: function () {
//             return new User(this.firstName, this.lastName, this.email);
//         }
//     };
// };

// var user = new UserBuilder().setFirstName('Eshgin').setLastName('Farzali').setEmail('eshqinferzeliyev@gmail.com');
// console.log(user.build());



//   class Person {
//     constructor(name, surname, age) {
//       this.name = name;
//       this.surname = surname;
//       this.age = age;
//     }
//     showFullInfo() {
//       return this;
//     }
//   }

//   let imran = new Person("Imran", "Hatefi", 25);

//   console.log(imran.showFullInfo());

// class Person {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }
// }

// class Student extends Person {
//   constructor(name, surname, age, education) {
//     super(name, surname, age);
//     this.education = education;
//   }
// }

// let ferid = new Person("Ferid", "Zamanli", 25);
// let imranMuellim = new Student("ADNSU", "Imran", "Hatefi", 25);
// console.log(imranMuellim);
// console.log(ferid);


// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   static salam() {
//     return "salam Vusal";
//   }
// }

// class Customer extends Person {
//   constructor(name, exp) {
//     super(name);
//     this.exprerience = exp;
//   }
// }

// let eltac = new Customer("eltac", 2);
// console.log(eltac.salam());



/*function sayHello(greet, msg) {
  console.log(`${greet} ${this.name}  ${msg}`);
}

let obj = {
    name:"WEB 3.1"
}*/
// sayHello.call(obj,"X","Y");
// sayHello.apply(obj,["X","Y"])


// function whoCantListenLesson(){
//     console.log(`${this.name} / ${this.surname}`)
// }
// let person = {
//     name:"Eshgin",
//     surname:"Farzaliyev"
// }
// let x = whoCantListenLesson.bind(person)
// x()


// 28.01.2023

// class Web {
//     constructor(name, count, regPrice) {
//         this.name = name;
//         this.count = count;
//         this.sum = regPrice
//     }

//     createTeacher(tname, tsurname) {
//         this.tname = tname;
//         this.tsurname = tsurname
//         return { tname, tsurname, group: this.name, count: this.count }
//     }

//     createStudent(stuName) {
//         return {
//             name: stuName,
//             group: this.name,
//             teacher: `${this.tname} / ${this.tsurname}`
//         }
//     }

// }

// let ceo = new Web('3.1', 20, 40000);
// let teacher1 = ceo.createTeacher("Imran", 'Hatefi')
// let stu1 = ceo.createStudent("Sahin")
// console.log(stu1)


// 1) STEP 1

// ANBAR :-> ADI , G-QIYMETI , S-QIYMETI , CATEGORY , SUPPLIER
// FILIAL:-> ADI , S-QIYMETI , CATEGORY , F-QIYMETI

// class Owner {
//     constructor(name,surname){
//         this.name = name,
//         this.surname = surname
//     }

//     branch(bname, bAddress){
//         return {
//             branchName:bname,
//             branchAddress: bAddress,
//             owner: `${this.name} ${this.surname}`
//         }
//     }

// }
// class Product extends Owner {
//     constructor(pname,pcost,sprice,category,supplier,name,surname){
//         super(name,surname);
//         this.pname = pname;
//         this.pcost = pcost;
//         this.sprice = sprice;
//         this.category = category;
//         this.supplier = supplier;
//     }
//     newProd (){
//         return {
//             name:this.name,
//             surname:this
//         }
//     }
// }

// let imran = new Owner("Imran",'Hatefi');

// let alma = new Product('alma', 1, 2, 'fruit', 'agac', imran.name, imran.surname)
// console.log()

// let x = {name:'imran',age:1};

// localStorage.setItem("salam", JSON.stringify(x))

// localStorage.removeItem('salam')

// let arr = [
//     { name: '1' },
//     { name: '2' },
//     { name: '3' },
//     { name: '4' }
// ]

// if ((JSON.parse(localStorage.getItem('vusal')))===null) {
//     localStorage.setItem('vusal',JSON.stringify(arr))
// }

// let y = JSON.parse(localStorage.getItem('vusal'))
// let newArr = y.filter(e=> e.name !== '2')
// localStorage.setItem('vusal', JSON.stringify(newArr))

// let x = JSON.parse(localStorage.getItem('vusal'))
// console.log(x)


//let eshgin = document.getElementsByClassName("div1");

// let dividers = document.getElementsByClassName("div1")

 //let dividers = document.querySelectorAll('.div1')

 //console.log(dividers);

// let imran = document.getElementById('imran')

// let imran = document.querySelector('#imran')

// imran.style.color='blue'

// let x = document.getElementsByTagName("div")

// console.log(x);

// HTML collection
// Node list

// let imran = document.getElementById('imran')

// imran.addEventListener("click",()=>{
//     console.log("salam imran")
// })

// let change = document.getElementById("mode");
// let body = document.getElementsByTagName("body")[0];
//let reset = document.getElementById("reset")

// change.addEventListener("click",()=>{
//     body.style.background = "red"
// })

// reset.addEventListener("click", () => {
//     body.style.background = 'black'
//     body.style.color='white'
// })

// change.addEventListener("toggle",()=>{
//     console.log('asflkjklshdf');
// })

// let div1 = document.getElementsByTagName("div")

// let pElement = document.createElement("p")
// pElement.textContent = 'sdavjhdkjbkdshfksjdahfkasjdhfkjahkjfh'

// div1.append(pElement)


// TODO LIST

// let input = document.getElementById('input')
// let btn = document.getElementById("btn")
// let lists = document.getElementById('list-box')

// btn.addEventListener("click",()=>{
//    let listElement = document.createElement("li")
//     listElement.textContent = input.value
//     lists.append(listElement);
//     input.value = ""
// })  

// if (JSON.parse(localStorage.getItem('list')) === null) {
//     localStorage.setItem("list",JSON.stringify([]))
// }




// btn.addEventListener("click",()=>{
//     let getList = JSON.parse(localStorage.getItem('list'))
//     let newObj = { id: Math.random(), data : input.value };
//     localStorage.setItem('list', JSON.stringify([...getList,newObj]))

//     let listArr = JSON.parse(localStorage.getItem("list"))
//     lists.innerHTML = ''
    
//     listArr.reverse().forEach(e=>{
//         let listElement = document.createElement("li")
//         listElement.textContent = e.data;
//         let icon = document.createElement("i")
//         icon.className = 'fa-solid fa-xmark';
//         listElement.append(icon)
        
//         icon.addEventListener("click",()=>{
            
//         })
        
//   lists.append(listElement)
        
        
//     })
// })

// function del() {
//     let filteredData = listArr.filter(item => item.id !== e.id)
//     localStorage.setItem("list", JSON.stringify(filteredData))
// }





// btn.addEventListener("click",)

// function write(arr){
//         arr.reverse().forEach(e=>{
//         let listElement = document.createElement("li")
//         listElement.textContent = e.data;
//         let icon = document.createElement("i")
//         icon.className = 'fa-solid fa-xmark';
//         listElement.append(icon)
        
//         icon.addEventListener("click",()=>{
//             let filteredData = listArr.filter(item=>item.id !== e.id)
//             localStorage.setItem("list",JSON.stringify(filteredData))
//             let x = JSON.parse(localStorage.getItem('list'))
//             write(x)
//         })
        
//          lists.append(listElement)
    
//     })


// }




//let pTag = document.getElementsByTagName("p")[0]

//pTag.className = 'blue';

// pTag.classList.add("blue")

// pTag.classList.add('orange')

// pTag.classList.remove('blue')

// pTag.classList.replace("orange",'oranges')



//let pTag = document.getElementsByTagName("p")[1];

//pTag.classList.add("salam")

// pTag.classList.add("blue")

// pTag.classList.add("oranges")

// pTag.classList.remove("oranges")

// pTag.classList.replace("blue",'oranges')


//let newClass = document.getElementsByClassName('salam')

//console.log(newClass);

if (JSON.parse(localStorage.getItem("users"))===null) {
    localStorage.setItem('users',JSON.stringify([]))
}

let username = document.getElementById('log')
let password = document.getElementById("pass")
let btn = document.getElementById('btn')
let login = document.querySelector(".login")
let register = document.querySelector(".register")
let redReg = document.querySelector('#change-reg')
let redLog = document.querySelector("#change-up")


let regUser = document.getElementById('usr')
let regPass = document.getElementById("psw")
let name = document.getElementById("name")
let registerBtn = document.getElementById('registerBtn')


redReg.addEventListener('click',()=>{
    login.style.display = 'none';
    register.style.display = 'flex'
})
redLog.addEventListener("click", () => {
    login.style.display = 'flex';
    register.style.display = 'none'
})



// REGISTER PART

registerBtn.addEventListener('click',()=>{
    let oldUsers = JSON.parse(localStorage.getItem("users"))
    let newPerson = {
        name: name.value,
        username: regUser.value,
        password: regPass.value
    }
    localStorage.setItem('users',JSON.stringify([...oldUsers,newPerson]))
})

// LOGIN

btn.addEventListener("click",()=>{
    let allUsers = JSON.parse(localStorage.getItem("users"))

    let currentUser = allUsers.find(item => item.password === password.value && item.username === username.value)
    localStorage.setItem("current",JSON.stringify(currentUser))

    currentUser ? window.location.href = 'user.html' : alert("SEHVDIR")
})


// FORGOT

let forget = document.getElementById("forget")

forget.addEventListener("click", () => {
    let allUser = JSON.parse(localStorage.getItem("users"));
    let findUser = allUser.find(e => e.username === username.value)

    alert(findUser.password)
})



// CONVERT CUSTOM ENCODE

function encode(){
    let allUser = JSON.parse(localStorage.getItem('users'))
    return allUser.map(element => {
       return Object.entries(element).map(e=>{
            return [e[0] = 'Esgin',e[1] = 'SALAM']
        })
    });
}   

let newArr = encode()

function decode(){

}

console.log(encode())
console.log(decode())


class Coding{
    
}
























