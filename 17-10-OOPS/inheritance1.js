// Main Account
class Account{
         acc_name;
         acc_email;
        
}
// Saving Account
class savingAcc extends Account {
    acc_id;
    acc_bal;
    constructor(id,bal,name,email){
        super() //invoking the parents class
        this.acc_id= id;
        this.acc_bal= bal;
        this.acc_name = name;
        this.acc_email = email;
    }

}
//Current Account
class currentAcc extends Account{

}

let sa1 = new savingAcc( 100 , "Rahul", 1000, "rahul123@gmial.com");
console.log(sa1);
// let ca1 = new currentAcc(101, "Gandhi" , 1000);