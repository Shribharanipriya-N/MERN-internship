// console.log(4.0/"2.5");
// console.log(4/5);
// console.log(2/Infinity)
// var a=6;
// if(a>0){
//     console.log("positive")
// }
// else{
//     console.log("negative")
// }
// a>0?console.log("positive"): console.log("negative")

// // named function
// function add(a,b)
// {
//     return a/b;
// }
// console.log(add(3,"8"))

// anonymous function
// var add=function(a,b){
//     return a+b;
// }
// console.log(add(3,4))

// //arrow function
// var add=(a,b)=>{
//     return a+b;
// }
// console.log(add(3,4))

// named-odd even
// function oddeven(a){
//     if(a%2==0){
//         console.log("even");
//     }
//     else{
//         console.log("odd")
//     }
// }
// oddeven(5)
// function oddeven(a){
//     if(a%2==0){
//         return "even";
//     }
//     else{
//         return "odd"
//     }
// }
// console.log(oddeven(5))

// anonymous function

// var oddeven=function(a){
//     if(a%2==0){
//                 return "even";
//             }
//             else{
//                 return "odd"
//             }
// }
// console.log(oddeven(4))

//arrow function

// var oddeven =(a)=>{
//     if(a%2==0){
//                         return "even";
//                     }
//                     else{
//                         return "odd"
//                     }
// }
// console.log(oddeven(5))

// function oddeven(a){
//         return a%2==0?  "even" : "odd"
//     }
// console.log(oddeven(4))

// function oddeven(a){
//     a%2==0? console.log("even"):console.log("odd");
// }
// oddeven(3)

// arrow function with one parameter and one statement

// var oddeven=a=>a%2==0?"even":"odd"
// console.log(oddeven(3))
//  var positiveornegative =a=>a>0?"positive":"negative"
//  console.log(positiveornegative(-9))


// // hoisting
// console.log(z)
// var x=5;
// let y=7;
// const z=9

//reassignment
// x=8
// y=14;
// console.log(x)

//re declaration
// var x=7
// const x=9
// console.log(x)

//global scope var,let,const

// let x=6
// function print(){
//     console.log(x+"ggfh");
// }
// print()
// console.log(x);

//local scope

// var x=()=>{
//     let y=9
//     console.log(y)
// }
// x();
// console.log(y)//error

//block scope
// var a=19
// if(a>0){
//     var c=9;
//     console.log(c)
// }
// console.log(c)

// var a=19
// if(a>0){
//     let c=9;
//     console.log(c)
// }
// console.log(c) //error

// function global(){
//     const b=20;
//     if(b>0){
//      var c=30;
//         console.log("inside block"+c)
//     }
//     console.log("inside func"+c)
// }
// console.log("outside func"+c)
// global()

//array
// var arr=[1,5,4,43,true,"jskhffjaew"];
// console.log(arr)
// //arr methods
// arr.push(8)//last added
// arr.unshift(1)//first added
// console.log(arr)
//  var remove=arr.pop()
//  console.log(remove)
// console.log(arr)
// var removed=arr.shift()
// console.log(removed)
// console.log(arr)

//accessing array
// for(const element of arr){
//     console.log(element*2)
// }
// var newarr=new Array()
// for(var element of arr){
//     newarr.push(element*2)
// }
// console.log(newarr)
//  

// var arr=[1,2,3,3,4,5,6,7,8,32,4,52,42,4325]
// var splice=arr.splice(4,6);
// console.log("splige"+splice)
// console.log(arr)
// var a=[1,2,3,4,5]
// for(var i=6;i<=10;i++){
//     a.push(i)
// }
// // a.push(6,7,8,9,10)

// var b=a.splice(0,4)
// console.log(a,b)
//higher order function -2 types
//function as argument
// function fun1(a){
//     a();
//     console.log("fun11")
    
// }
// function fun2(){
//     console.log("danhvd")
// }
// fun1(fun2)

//function as return value

// function a(a){
//     return function(b){
//         return a*b;
//     }
// }
//  var x=a(2);
//  console.log(x(6));

//  //another method
// console.log(a(4)(5))

// x=10;
// console.log(x);
// //for each
// var arr=[1,2,3,4,5];
// var arr1=[];
// arr.forEach((element)=>{
//     arr1.push(element*2)
// })
// console.log(arr1)

//map
// arr=[1,2,3,4,5];
//  newarr=arr.map(element=>
//  element%2==0? element:element*2
// )
// console.log(newarr)

//filter
// var arr=[1,2,3,4,5];
// var newarr = arr.filter((element)=>
// elemen t%2==0
// )
// console.log(newarr)
// const arr=[0,null,undefined,"",1,2,3,false,true,"A",-1];
// var newarr=arr.filter(element=>{
//    return element
// })
// console.log(newarr)

//sorting
// const arr=[1,2,3,34,5,5,66,6];
// arr.sort((a,b)=>{
//     return b-a;
// });
// console.log(arr);


//array methods


 
 //find
//returns 1st staisfied value
//  const array1 = [5, 18, 130, 44];
//  const found = array1.find((element) => element > 10);
//  console.log(found);
 
//  const inventory = [
//      { name: "apples", quantity: 2 },
//      { name: "bananas", quantity: 0 },
//      { name: "cherries", quantity: 5 },
//      { name: "cherries", quantity: 15 },
//    ];
//    function isCherries(fruit) {
//      return fruit.name === "cherries";
//    }
//    console.log(inventory.find(isCherries));
 
//    //includes
//    var arr2=[1,2,3,4,5]
//    var x=arr2.includes(4)
//    console.log(x);
 
//    const arr3 = ["a", "b", "c"];
//  console.log(arr3.includes("a", -100)); 
//  console.log(arr3.includes("b", -100)); 
//  console.log(arr3.includes("c", -100));  
//  console.log( arr3.includes("a", -2));
 
//  //indexof
//  const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  let index = fruits.indexOf("Apple");
//  console.log(index);
 
//  const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
//  console.log(beasts.indexOf('ant'));
 
//  //join
//  const elements = ['Fire', 'Air', 'Water'];
//  console.log(elements.join('-'));
 
//  //reverse
//  const arr4 = ['one', 'two', 'three'];
//  console.log('array1:', arr4);
//  const reversed = arr4.reverse();
//  console.log('reversed:', reversed);
//  console.log('array1:', arr4);
//  //every

// function test(a) {
//     return a%2==0;
//  }
//  var arr=[2,4,6,5,7]
//  var t=arr.every(test);
//  console.log(t);
 
//  var test2= function (a){
//      return a<10;
//  }
//  var arr1=[1,2,3,4,5]
//  var t2=arr1.every(test2)
//  console.log(t2);
 
//  var test3=(a)=>a>0
//  var arr2=[1,5,6]
//  var t3=arr2.every(test3);
//  console.log(t3);
 
//  //slice
//  const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//  console.log(animals.slice(2));
//  console.log(animals.slice(2, 4));
//  console.log(animals.slice(1, 5));
 
//  //tostring
//  const array5 = [1, 2, "a", "1a"];
//  console.log(array5.toString());

//objects
// // key-always string
// var obj={
//     firstName:{
//       start:"djaf",
//       end:"fndsf",
//     },
//     lastName:"hsj",
//     age:19
// }
// console.log(obj.firstName.start)
// //[]->string
// console.log(obj["firstName"]["start"])

// const obj={
//     firstName:"Tony",
//     lastName:"Stark",
//     age:35,
//     marks:{
//         physics:90,
//         maths:95,
//     }
// };
// const sub="maths";
// console.log(obj.firstName+" "+obj.lastName+"'s "+sub.charAt(0).toUpperCase()+sub.slice(1)+" marks are "+obj.marks[sub])
// console.log(obj.firstName+" "+obj.lastName+"'s "+sub[0].toUpperCase()+sub.slice(1)+" marks are "+obj.marks[sub])

// //string literals or template literals backtick operator
// console.log(`${obj.firstName} ${obj.lastName}'s ${sub[0].toUpperCase()}${sub.slice(1)} marks are ${obj.marks[sub]}`)


// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }


//array of objects
// const students=[
//     {
//         name:"abc",
//         age:23,
//         grade:3,
//         height:5.3,
//     },
//     {
//         name:"def",
//         age:13,
//         grade:7,
//         height:2.3,
//     },
//     {
//         name:"ghi",
//         age:29,
//         grade:12,
//         height:5.4,
//     }
// ]

// const n=students.map((element)=>{
//     return element.name;
// })
// console.log(n)
// const g=students.map((element)=>{
//     return element.grade;
// })
// console.log(g)

// const g1=students.filter((element)=>{
//       return element.grade>5;
// })
// console.log(g1)

// const gr=g1.map(element=>{
//     return element.grade;
// })
// console.log(gr)

// const gr1=g1.map(element=>{
//     return element.name;
// })
// // console.log(gr1)
// const max=Math.max(...gr);
// console.log(max)


// const sorted=n1.reverse()
// const maxh=Math.max(...n1)
// console.log(maxh)
// const minh=Math.min(...n1)
// console.log(minh)
// console.log(n1.sort());
// console.log(n1.reverse());
// const g1=students.filter((element)=>{
//           return element.height;
//     })
//     // console.log(g1)
// const sorteddesc=students.sort((a,b)=>{
//         return b.height-a.height;
//     });
// console.log(sorteddesc)
// console.log(sorteddesc[0].name)
// console.log(sorteddesc[sorteddesc.length-1].name)

// const sortedasc=students.sort((a,b)=>{
//     return a.height-b.height;
// });
// console.log(sortedasc)
// console.log(sortedasc[0].name)


// const everyage=students.every((element)=>{
//     return element.age>25
// })
// console.log(everyage)

// const everyage1=students.every((element)=>{
//     return element.age<30
// })
// console.log(everyage1)

// const everyage=students.some((element)=>{
//     return element.age>25
// })
// console.log(everyage)
//name join ---refer
// console.log(sorteddesc.name.join(","))

//  const arr=[1,3,4];
//  const arr1 =arr
//  arr.push(5)
//  console.log(arr,arr1)
 //both arrays change
 //to eliminate this following method used
 //spread operator
//  const arr=[1,2,3,4]
//  const arr2=[5,6,7]
//  const arr3=[1,2,3,...arr,347,...arr2]
//  const arr1=[...arr,...arr2]//concatinating 2 arrays
//  arr.push(5)
//  console.log(arr,arr1)
//  console.log(arr3)

// const obj1={
//     name:"dbaf",
//     age:45
// }
// const obj2=obj1;
// obj1.age=88;//both value change

// const obj2={...obj1}
// obj1.age=88;
// console.log(obj1)
// console.log(obj2)
// const obj4={
//     name:"fdsgws",
//     age:85,
//     lunch:"friedrice"
// }
// //object must not be repeated
// const obj3={class:"it",...obj4,time:12.17,...obj1}
// console.log(obj3)

//array destructuring
//  const arr=[1,2,3,4,5]
//  const a=arr[0]
//  const b=arr[1] // to avoid these many steps
// const[a,b,c]=[1,2,4,5,7]
// console.log(a,b,c)
//to neglect first values
// const[,,a,b,c]=[1,23,4,9,73,5,42]
// console.log(a,b,c)
//rest operator
// const [a,b,...rest]=[1,2,3,4,5]
// console.log(a,b,rest)

// const [a,b,...jbhbn]=[1,2,3,4,5]
// console.log(a,b,jbhbn)


//obj destructuring
// const obj1={
//     f:"fndsgn",
//     l:"fndwgh",
//     age:6,
//     address:{
//         city:"pollachi",
//         state:"tn",
//     }
// }
// const {f,...rest}=obj1;
// console.log(f,rest)
//alias name for destructuring
// const {f:firstname,l:lastname,...rest}=obj1
//f and l not accessible
// but obj1.f and obj1.l is acessible

// console.log(firstname,lastname,rest);
// console.log(f,l,rest)//error
// console.log(obj1.f,obj1.l)

// //default value
// const{f,l,age=10,...rest}=obj1//if age is undefined then 10 is assigned else no change
// console.log(f,l,age);

// const {address}=obj1
// const {city}=address
// console.log(city)

// const {
//     address:{city:c}
// }=obj1

// console.log(c)


// function handleclick(){
//     document.getElementById("para").innerHTML="Button clicked..!"
// }


// count words in a sentence

// function countWords(str){
//     var words = str.split(" ");
//     return words.length;
// }
// var str = "The quick brown fox";
// console.log(countWords(str));


//Captilaize the first letter of Each word

// function capitalizeWords(str) {
//     var words = str.split(' ');
//     var capitalizedWords = [];
//     words.forEach(function(word) {
//         capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
//     });

//     return capitalizedWords.join(' ');
// }
// var str = "hello world!";
// var result = capitalizeWords(str);
// console.log(result); 


//Reverse words in a sentence

// function reverseWords(str) {
//     var words = str.split(' ');
//     var reverse = words.reverse();
//     return reverse.join(' ');
// }
// var str = "The quick brown fox";
// var result = reverseWords(str);
// console.log(result);

//Reverse the whole sentence
// function reverseSentence(str) {
//     var words = input.split('');
//     var reverse = words.reverse();
//     return reverse.join('');
// }
// var str = "Hello world!";
// var result = reverseSentence(str);
// console.log(result);

// function LongestWord(str){
//     var words = str.split(' ');
//         var longestWords = [];
//         words.forEach(function(word) {
//             longestWords.push(word.length);
//         });
// }




// function increment(){
//     const value=parseInt(document.getElementById("count").innerHTML);//explicit conversion
//     const value1=1*document.getElementById("count").innerHTML;//implicit conversion
//     document.getElementById("count").innerHTML=value+1;
// }
// function decrement(){
//     const value=parseInt(document.getElementById("count").innerHTML);//explicit conversion
//     const value1=1*document.getElementById("count").innerHTML;//implicit conversion
//     document.getElementById("count").innerHTML=value-1;
// }
// function clearvalue(){
//     document.getElementById("count").innerHTML=0;
// } 

// function addtask(){
//     document.getElementById("listtasks").innerHTML.concat(document.getElementById("task").innerHTML);
// }

// console.log("start");
// setTimeout(()=>{
//     console.log("hello");
// },0);
// console.log("end");


// console.log("start");
// setTimeout(()=>{
//     console.log("hello1");
// },2000);
// setTimeout(()=>{
//     console.log("hello");
// },0);
// console.log("end");

//setinterval
// var interval;
// function start(){
//      interval=setInterval(()=>{
//         const value=1*document.getElementById("counter").innerHTML;
//         document.getElementById("counter").innerHTML=value+1;
//         // if(value+1===6){
//         //     clearInterval(interval);
//         //     document.getElementById("counter").innerHTML=0;
//         // }
//     },1000)
    
// }
// function stop(){
//     clearInterval(interval);
//     document.getElementById("counter").innerHTML=0;
// }


// const interval=setInterval(start,200);
// function start(){
//         console.log("hi")
// }

// function stop(){
//     clearInterval(interval);
// }
// start();
// start();
// stop();
// var x=0;
// var a=new Promise((resolve,reject)=>{
// if(x>5){
//     resolve(x);
// }
// else
// reject(x);
// })
// console.log("start");
// a.then((res)=>{
//     console.log("success",res);
// }).catch((err)=>{
//     console.log("error",err)
// })
// console.log("end");



// var p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject();
//     },1000)
// })
// var p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve();
//     },1000)
// })

// //above variable based execution when time is same
// p1.then(()=>
// console.log("success p1")).catch(()=>{
//     console.log("error p1")
// })
// p2.then(()=>
// console.log("success p2")).catch(()=>{
//     console.log("error p2")
// })

// var p1=()=>new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve();
//     },1000)
// })
// var p2=()=>new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject();
//     },1000)
// })
// //below function based execution when time is same
// p2().then(()=>
// console.log("success p2")).catch(()=>{
//     console.log("error p2")
// })

// p1().then(()=>
// console.log("success p1")).catch(()=>{
//     console.log("error p1")
// })

//pending
// const p3=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve()
//     },5000)
// })
// console.log(p3)

//resolved
// const p3=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve()
//     },2000)
// })
// p3.then(()=>{
// console.log("jggfds")
// })
// setTimeout(()=>{
//     console.log(p3);
// },6000)

//reject
// const p3=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject()
//     },2000)
// })
// p3.then(()=>{
// console.log("jggfds")
// }).catch(()=>{
//     console.log("dfkjdsghfh")
// })
// setTimeout(()=>{
//     console.log(p3);
// },6000)

//PROMISE CHAINING
// var p1=()=>new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject();
//     },1000)
// })
// var p2=()=>new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve();
//         },1000)
//     })
 

// var p3=()=>new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject();
//         },1000)
//     })
// // p1().then(()=>{
//     console.log("p1 success");
//     return p2();
// }).then(()=>{
//     console.log("p2 success");
//     return p3();
// }).then(()=> console.log("p3 success")).catch(()=>{
//     console.log("error")
// })//catch common for all


//if p1 fails and p2 needs to be executed

// p1().then(()=>{
//     console.log("p1 success");
//     return p2();
// }).catch(()=>{
//     console.log("p1 error");
//     return p2();
// }).then(()=>{
//     console.log("p2 success");
//     return p3();
// }).catch(()=>{
//     console.log("p2 error");
//     return p3();
// }).then(()=> console.log("p3 success")).catch(()=>{
//     console.log("p3 error")
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1').then((res)=>{
//     console.log(res);
//     return res.json();
// }).then((json)=>{
//     console.log(json);
// }).catch((err)=>{
//     console.log("error",err)
// })

// fetch('https://jlaceholder.typicode.com/todos/1').then((res)=>{
//     console.log(res);
//     return res.json();
// }).then((json)=>{
//     console.log(json);
// }).catch((err)=>{
//     console.log("error",err)//error handling
// })   


// async function  fetchdata(){
//     console.log("start");
//     try{
//         const res=await p1();
//         console.log(res);
//         const res1=await p2();
//         console.log(res1);
//     }
//     catch(err){
//         console.log(err);
//     }
//     console.log("end")
// }

// fetchdata();

// async function  fetchdata(){
//     console.log("start");
//     try{
//         const res=await p1();
//         console.log("p1succcess",res);}
//         catch(err){
//             console.log(err);
//         }try{
//         const res1=await p2();
//         console.log("p2succcess",res1);
//         }
    
//     catch(err){
//         console.log("dskhjfg",err);
//     }   
//     console.log("end")
// }

// fetchdata();

// const fetchdata=async()=>{

// }
// async function  fetchdata(){
//         console.log("start");
//         try{
//           const res= await  fetch('https://jsonplaceholder.typicode.com/todos/1')
//           const data=await res.json();
//           console.log(data);
//         }
//         catch(err){
//             console.log(err,"jhdfffgchhhhn");
//         }
//         console.log("end")
//     }
    
//     fetchdata();
// var cart="shoe";
// var createOrder = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       cart.length > 0 ? resolve(10) : reject("Cart Empty");
//       console.log("Order Created");
//     }, 2000);
// });

// var AccountBalance=1500;
// var GotoPayment = (orderId) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Payment Processing");
//       AccountBalance > 1000 ? resolve(1000) : reject("Insufficient Balance");
//     }, 2000);
//   });

// var UpdateAccountBalance = (cartValue) => {
//   setTimeout(() => {
//     AccountBalance -= cartValue;
//     console.log("New Balance : ", AccountBalance);
//   }, 1500);
// };

// var GotoHome = () => {
//   setTimeout(() => {
//     console.log("Return to Home");
//   }, 2000);
// };

// createOrder()
//   .then((result) => {
//     return GotoPayment(result);
//   })
//   .then((res) => {
//     return UpdateAccountBalance(res);
//   })
//   .catch((err) => {
//     console.log("Error :", err);
//   })
//   .then(() => GotoHome());

// let minutes = 0;
// let seconds = 0;
// let displayMinutes = 0;
// let displaySeconds = 0;
// let interval;

// function updateStopwatch() {
//     seconds++;
//     if (seconds>=60) {
//       seconds = 0;
//       minutes++;
//     }
//     displayMinutes = (minutes < 10) ? "0" + minutes : minutes;
//     displaySeconds = (seconds < 10) ? "0" + seconds : seconds;
//     document.getElementById("stopwatch").innerHTML = displayMinutes + ":" + displaySeconds;
//   }

//   function startStopwatch() {
//     interval = setInterval(updateStopwatch, 1000);
//   }

//   function stopStopwatch() {
//     clearInterval(interval);
//   }

//   function resetStopwatch() {
//     clearInterval(interval);
//     minutes = 0;
//     seconds = 0;
//     document.getElementById("stopwatch").innerHTML = "00:00";
//   }

function changeshape(){
  var x=document.getElementById("shape");
  if (x.classList.contains('circle')) {
    x.classList.remove('circle');
    x.classList.add('square');
  } else {
    x.classList.remove('square');
    x.classList.add('circle');
  }
}