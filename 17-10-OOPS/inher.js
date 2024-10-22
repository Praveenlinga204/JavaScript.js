class Account {
    acc_name;
    acc_email;
    constructor(name,email){
         this.acc_name = name;
         this.acc_email = email;
    }

}

class savingAccount extends Account{
    min_bal;
    acc_id;
    acc_bal;
    constructor(name,email,min,id,amount){
        console.log(amount)
        super(name,email);
        this.min_bal = min;
        this.acc_id = id;
        this.acc_bal=amount;
    }
    deposite_amount(amount){
        this.acc_bal = this.acc_bal + amount;
    }
    withdrawal_amount(amount){
        console.log(amount)
        this.acc_bal = this.acc_bal - amount
    }
    get_bal(){
        return this.acc_bal - 500;
    }

}

let a1 = new savingAccount("rahul", "rahul12@gmail.com", 500, 101, 5000);
console.log(a1)
let j=a1.deposite_amount(5000);
console.log(`deposite sucessfuly ${a1.deposite_amount()}`)
console.log(a1)
//console.log(`Amount Deposited ${a1.deposite_amount()}`);
a1.withdrawal_amount(500);
console.log(a1)
console.log(`Your Bal is ${a1.get_bal()}`);
console.log("#############");


//secondAccount
let a2 = new savingAccount("Gandhi", "gandhi123@gmail.com", 500 , 102, 10000)
a2.deposite_amount(1000);
a2.withdrawal_amount(1000)
console.log(`Your Bal is ${a2.get_bal()}`);
console.log("#############");


