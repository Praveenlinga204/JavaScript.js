let eid =110;
let ename= "Rahul";
console.log(`Employee id: ${eid} and Name is ${ename}`) // js letreal
console.log('Employee' +" "+ eid +" "+ 'and Name is '+ ename);// 

//javascript function 23/09/2024
function login(){
    console.log("Login Successful")
}
login();

function greet(){
    console.log(" Your Welcome")
}
greet();

function add(a,b,c=1){
    console.log(a+b);
}
add(10,20);
add(100,1);
add(100);  // when you add something waithout value is will show as NaN.
add(1,2,3);
add(6,6,6);


function addd(a,b){
    return a + b
}
let di=addd(30,30);
console.log(di);

//calculate the yeaar 
function cal_Age(dob_year){
    let current_year = new Date().getFullYear();
    return current_year-dob_year
}
let age1=cal_Age(1997);
console.log(age1);

//for loop
/* for (let i=0;i<5;i++){
    console.log(i)
} */

//while loop
/* let i=0;
while(i<5){
    console.log(i);
i++
} */

//do while loop
let i= 0;
do{
    console.log(i)
    i++
}while(i<5); 