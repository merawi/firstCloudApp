//Load Dependencies
var mongoose = rquire('mongoose');

var Wallet = new mongoose. Schema({
    Customer : {type : Schema.Types.ObjectId, ref : 'Customer'},
    Balance : {type : Number},
    DateCreated : {type : Date, default :  Date.now()},
    LastModified : {type : Date, default : Date.now()},
    Debit : (amount)=>{
        if(this.Balance < amount && amount > 0) //throw error
        this.Balance = Balance - amount;
    },

    Credit : (amount)=>{
        if(amount >  0)
        this.Balance = Balance + amount;
    }
})

module.exports = {
    Wallet : mongoose.model('Wallet', Wallet)
}
