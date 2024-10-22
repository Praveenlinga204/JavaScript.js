//


class Employee{

}
let e1=new Employee();
let e2=new Employee();
let e3=new Employee();
console.log(e1)
console.log(e2)
console.log(e3)

//02

class account{
    min_Bal=100;     //property
    open_Account(){                             //method
        console.log(`Account Opened Sucessfully`)
    }
    Depsit_Amount(amount){
        console.log(`Amount Deposited Rs.${amount}`)
    }
    Get_Balance(){
        console.log(`your Balance is Rs.....`)
    }
}
let a1=new account();                //Objects
let a2= new account();
console.log(a1);                     // Invoking the object          
a1.open_Account()
a1.Depsit_Amount(500);
//a1.Get_Balance();
console.log(a2);
a2.open_Account()
a2.Depsit_Amount(50);
//a2.Get_Balance();


//03
 /* class account{
    accountt_id;
    accountt_name;
    acc_Balance=0;
    min_account=500;


 }
 let a1 = new account();
 console.log(a1);
 a1.accountt_id();
 a1.accountt_name();
 a1.acc_Balance();
 a1/min_Bal();  */ 
 