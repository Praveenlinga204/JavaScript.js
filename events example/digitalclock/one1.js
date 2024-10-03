setInterval(function(){
    document.getElementsByTagName('p')[0].innerHTML=new Date().toLocaleTimeString()
},1000)

/* let timeinteral=()=>{
    document.getElementsByTagName('p')[0].innerHTML=new Date().toLocaleTimeString(),1000
    
} */
//setimeout excicute the provided function After certain time interval
//setInterval excicute the provided function every certain time interval

//fat- arrow function/*  in python we call as lambda, in java we call as lambda */
//()=>{}  syntax

let ChangeColor=()=>{
    document.write("Good Morning")
}
ChangeColor();

//01 fat arrow function 
let add=(a,b,c)=>a+b+c;
let r1 = add(10,10,10);
console.log(r1);