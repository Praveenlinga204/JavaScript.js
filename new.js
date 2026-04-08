
/* const str ="welcome to the practice adindidndindk";
const findLargest = (sentnce)=>{
    return sentnce.split(' ').reduce((current,longest)=>{
            if(current.length > longest.length){
                return current
            }else {
                return longest
            }
    })
}
console.log(findLargest(str).length)
console.log(findLargest(str))


const arr = [100,500,200,3,8,12]
const sortedarr = arr.sort((a,b)=> a - b)
console.log(sortedarr) */

/* let num =17;
let a = 0,b=1;
while(true){
    let c = a + b
    if(c > num){
        break;
    }console.log(c);
   a=b;
   b = c;  
} */


/* let stro = "Hello"; //Reverse the string
let rev = "";
for(let i = 0; i < stro.length;i++){
    rev = stro[i] + rev
}
console.log(rev) */

//Write a program to check if a given number is an Armstrong number or not;
/* let num = 153;
let temp = num;
let sum = 0;
let digits = num.toString().length;

while (num > 0) {
    let digit = num % 10;
    sum += digit ** digits;
    num = Math.floor(num / 10);
}

if (sum === temp) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
} */


/* let i = 0;
do{
    console.log(arr[i]);
    i++
}while(i<arr.length) */


// for of loop used to array values;

/* for(let value of arr){
    console.log(value)
} */

//for in loop used in array//////

/* for(let index in arr){
    console.log(index, arr[index])
} */

//forEach method 
/* arr.forEach((i)=>{
    console.log(i)
}) */


//Map method  
/* let arr = [10,20,30,40,50,60,70,80,90,100];
let result = arr.map((value)=>{
     return (value * 2)
})
console.log(result);
console.log(arr); */

//filter method
/* let arr = [10,20,30,40,50,60,70,80,90,100];
let result = arr.filter((value)=>{
    return  value > 50
})
console.log(arr)
console.log(result) */

//Reduce method
/* let arr = [10,20,30,40,50,60,70,80,90,100];
let result = arr.reduce((acc,value)=>{
   return ( acc+value)
})
console.log(arr);
console.log(` The total is`,result); */

//how to find the largest number 
/* let arr =[10,20,30,40,50];
let max = arr.reduce((acc,val)=>{
  return  val > acc? val:acc;
})
console.log("The greatest number is",max) */

//inbuild method
/* let arr =[10,20,30,40,50];
let max = Math.min(...arr)
console.log(max) */

//infinit currying
/* function add(a){
    return function(b){
        return function(c){
             return a+b+c
        }
    }
}
console.log(add(1)(1)(1)) */

/* let obj ={
    name:"Chandu"
}
console.log(obj.name);
delete obj.name;
console.log(obj.name) */

//Can you write a function that takes an array and returns a new array with only the
//unique elements?


/* function getUniq (arr){
  return arr.filter((value,index)=>arr.indexOf(value)===index)
}
const result = getUniq([1, 2, 2, 3, 4, 4, 5]);
console.log(result) */

/* let arr = [1,2,3,4,5,6,7,8];
const result = arr.reduce((acc,val)=>acc+val)
console.log(result) */

//Can you write a function that takes an array and returns the index of the first
//occurrence of a given value?


/* 
function findFirstUni(arr,value){
    return arr.indexOf(value)
}
let result = findFirstUni(arr,20)
console.log(result) */

//reverse a array
/* const result = arr.sort((a,b)=> b-a)
console.log(result) */

//Call method 
/* const person ={
  fullname: function(city,country){
    console.log( this.firstname + " " + this.lastname +" "+ "from " + city +" "+ country);
  }
}
const person1 = {
    firstname : "Praveen",
    lastname:"Linga"
}
const person2 = {
    firstname : "Praveen",
    lastname:"Kumar"
}
person.fullname.call(person2,"Chennai","India") */
/*  person.fullname.apply(person1,["Bangalore","India"]) */


/*  const per1Name = person.fullname.bind(person1,"Banglore","India");
 per1Name() */


 //Hoisting
/*  console.log(x)//undifined
 var x = 10;
 console.log(x)//10 */
/*  greet("Praveen")//only function Decalration will be hoisted

 function greet(name){
    console.log(`Hello my name is ${name}`)
 } */

    //closure funciton

   /*  function outer(){
        let count = 0;
        return function inner(){
            console.log(count++)
        }
    } */
   /*  const counter = outer()
    counter()
    counter()
    counter() */

  
   /*  console.log(num[0])
    console.log(num[1])
    console.log(num[2]) */
    /* let [a,b,c,d] = num;
    console.log(a) */

 /*  for(let i=0;i<num.length;i++){
    console.log(num[i])
  } */

   /*  for(let no of num){
        console.log(no)
    } */


//Objects 
//create an object.
/* const person = {
    name:"Praveen",
    age:28
}
const {name,age} = person;
console.log(name)
console.log(age) */

//how to create a 2D array in js
/* const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]); */


/* let arr = [1,2,3,4,5];
let newArr = arr.slice(1,2)
/* arr.push(6) */
//arr.pop()
//arr.shift()
//arr.unshift(0)
/* console.log(arr)
console.log(newArr) */ 

//combine two object without overwritting it?

/* let per1 = {name:"Praveen",age:25}

let per2 ={name:"Linga",age:24}

let combined = {person1:per1,person2:per2}
console.log(combined.person1) */

//JavaScript Use of indexof method
/* let arr =[1,2,3,4,5,6,7,8];
let index = arr.indexOf(2)
console.log(index) */

/* let arr =[1,2,3,4,5,6,7,8]; */
/* arr.forEach((n)=> console.log(n*2)) */
/* let result = arr.map((n)=> n * 2)
console.log(result);
console.log(arr) */
/* let result = arr.sort((a,b)=> b - a);
console.log(result) */

/* 
const pantry = [
  { name: 'Apple', category: 'Fruit', calories: 95 },
  { name: 'Broccoli', category: 'Vegetable', calories: 50 },
  { name: 'Chicken', category: 'Protein', calories: 239 },
  { name: 'Banana', category: 'Fruit', calories: 105 },
  { name: 'Spinach', category: 'Vegetable', calories: 23 }
];

const veg = pantry.filter((food)=> food.category === 'Vegetable')
console.log(veg) */

/* const names = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob'];
const uniqName = names.filter((name,index)=>{
    return names.indexOf(name) === index
})
console.log(uniqName) */
/* if([] == true){
    console.log("aji is absent")
}else{
    console.log("aji is present")
} */
/* var abc = 10;
if(function f(){

}){
    abc = abc+typeof f
}
console.log(abc) */

//infinity currying

/* function add(a){
    return function (b){
       if(b !== undefined){
        return add(a + b)
       }
       else{
        return a
       }
    }
}
console.log(add(5)(5)(10)())
console.log(add(5)()) */


/* let foodList = new Promise((res,rej)=>{
    let success = false;
    if(success){
        res (["Idly","sambar","vada"])
    }else{
        rej ("Error")
    }
})
foodList.then((data)=> console.log("Your list is",data))
.catch((err)=> console.log(err)) */

/* let count = 0;
let counter =setInterval(() => {
      console.log(count++)
    if(count == 50){
        clearInterval(counter)
    }
},1000); */


   



