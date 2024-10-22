class account{
    acc_id ;
    acc_name;
    acc_bal;
constructor(id,name,bal){
    this.acc_id = id;
    this.acc_name = name;
    this.acc_bal =bal;
}
       deposite_amount(amount){
          this.acc_bal=this.acc_bal + amount;
         }
         withdra_amt(amount){
            this.acc_bal = this.acc_bal - amount ;
         }
          get_bal(){
             return this.acc_bal - 500;
          }

}
//account 1
let a1 =new account( 101, "Rahul", 5000);
a1.deposite_amount(100);
a1.withdra_amt(50);
console.log(a1);
console.log(a1.get_bal());

//account2
let a2 =new account(102, "Gandhi", 1000)
console.log(a2);

//account 3
let a3 = new account(103, "sonia", 10000);
console.log(a3)