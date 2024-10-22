class Account{
    min_bal=500;
    acc_bal=0;

    deposit_amount(amount){                            //method
        this.acc_bal= this.acc_bal + amount;
    }
}
let a1= new Account();
a1.deposit_amount(500);
console.log(a1);


//second account
let a2 = new Account();
a2.deposit_amount(1000);
console.log(a2); 


