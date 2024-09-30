// how to verify the given array is empty or not/////////////////////////////////////

/* let enames=["Rahul","Sonia","Ranjith"];
let eid=[];
if(eid.length>0){
    console.log("Given array in not empty")
}else{
    console.log("Empty array")
} */


let myname=[];
if(myname.length>0){
    console.log("Given array in not empty")
}else{
    console.log("Given array is empty")
}

//how to verify the given object is empty or not///////////////////////////////////////

let one={a:10,b:20};
/* if (Object.keys(namey).length>0){
    console.log("Given object is not empty")
}else{
    console.log("Empty object")
} */

Object.keys(one).length>=0 ? console.log("not empty") :console.log("Empty");

///other example
let object={};
Object.keys(object).length>0?console.log(" not empty"):console.log("Empty");

//how to print object in browser???????????
// If you want to print the object as a string, you can use JSON.stringify().



let a="Rahul"; 
let enamy="Mahesh"
let emp={
    id:3937,
    num:6587986578697,
    flag:"Rajesh",
    email:"Rajeshatany.com"
}
document.write(a);
document.write(enamy);
document.write(JSON.stringify(emp));


//class array
/* lenght
push
pop
shift
unshit
reverse
indexof
lastindex
call
apply

ES6
map
foreach
find 
filter
findindex
redue
  */

//class Object
//how to freeze and how to check it is freeze or not

let product={
    pid:"p1p",
    pname:"name",
    price:10
}
Object.freeze(product);
product.discount=10;
console.log(Object.isFrozen(product));