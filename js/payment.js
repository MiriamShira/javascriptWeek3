

class Payment {
    constructor(sum, description, transactionStatus, PaymentMethod, cname, cphone) {
        this.id = Math.random();
        this.PaymentDate = new Date();
        this.sum = sum;
        this.description = description;
        this.transactionStatus = transactionStatus;
        this.PaymentMethod = PaymentMethod;
        this.customerInfo = {
            name: cname,
            phone: cphone
        }

    }

}

class CreditCard extends Payment {
    constructor(sum, description, transactionStatus, PaymentMethod, cname, cphone, last4digits, experetionDate) {
        super(sum, description, transactionStatus, PaymentMethod, cname, cphone);
        this.last4digits = last4digits;
        this.experetionDate = experetionDate;
    }
}

class ClearingCompany extends Payment {
    constructor(sum, description, transactionStatus, PaymentMethod, cname, cphone, ClearingCompanyId) {
        super(sum, description, transactionStatus, PaymentMethod, cname, cphone);
        this.ClearingCompanyId = ClearingCompanyId;

    }
}

class Main {
    constructor() {
        this.Payments = []
    }
    payment(){
        debugger
if(counterCredit%2!=0){
    this.makeingAPaymentByCreditcard();

}
else if(counterClearingCompany%2!=0){
    this.makeingAPaymentByClearingCompany();
    
}
else{
   this.makeingAPayment();
}
    }
    //resive info to make a payment....
    makeingAPayment() {
        debugger;

        let sum = document.getElementById("sum").value
        let description = document.getElementById("description").value
        let transactionStatus = document.getElementById("status").value
        let PaymentMethod = document.getElementById("method").value
        let cname = document.getElementById("fname").value
        let cphone = document.getElementById("phone").value
        let newPament = new Payment(sum, description, transactionStatus, PaymentMethod, cname, cphone);
        this.Payments.push(newPament);
        console.log(this.Payments)
    }
  
    //resive the payment to return...
    makeingAreturn(Payment) {
        if (this.Payments.indexOf(Payment) > -1)
            this.Payments.splice(this.Payments.indexOf(Payment), 1);

    }
    //this is an outline only! resive the object and sum to edit....
    editSum(Payment, sum) {
        this.Payments.indexOf(Payment).sum = sum;
    }
    editDescription(Payment, description) {
        this.Payments.indexOf(Payment).description = description;
    }
    editcustomerInfo(Payment, name, phone) {
        this.Payments.indexOf(Payment).customerInfo.name = name;
        this.Payments.indexOf(Payment).customerInfo.phone = phone;
    }

    makeingAPaymentByCreditcard() {
        
        let sum = document.getElementById("sum").value
        let description = document.getElementById("description").value
        let transactionStatus = document.getElementById("status").value
        let PaymentMethod = document.getElementById("method").value
        let cname = document.getElementById("fname").value
        let cphone = document.getElementById("phone").value
        let last4digits=document.getElementById("cvv").value;
        let experetionDate=document.getElementById("expmonth").value +"/"+ document.getElementById("expyear").value;
        let newPament = new CreditCard(sum, description, transactionStatus, PaymentMethod, cname, cphone, last4digits, experetionDate);
        this.Payments.push(newPament);
    }
    //resive the payment to return...
    makeingAreturnByCreditcard(Payment) {
        if (this.Payments.indexOf(Payment) > -1)
            this.Payments.splice(this.Payments.indexOf(Payment), 1);

    }
    makeingAPaymentByClearingCompany() {
        let sum = document.getElementById("sum").value
        let description = document.getElementById("description").value
        let transactionStatus = document.getElementById("status").value
        let PaymentMethod = document.getElementById("method").value
        let cname = document.getElementById("fname").value
        let cphone = document.getElementById("phone").value
        let ClearingCompanyId=document.getElementById("ClearingCompanyId").value;
    
        let newPament = new ClearingCompany(sum, description, transactionStatus, PaymentMethod, cname, cphone, ClearingCompanyId);
        this.Payments.push(newPament);
    }
    //resive the payment to return...
    makeingAreturnClearingCompany(Payment) {
        if (this.Payments.indexOf(Payment) > -1)
            this.Payments.splice(this.Payments.indexOf(Payment), 1);

    }

}
let counterCredit = 0
let counterClearingCompany = 0
function creditForm() {
    debugger;
    if (counterCredit % 2 === 0) {
        counterCredit = counterCredit + 1;
        document.getElementById("creditForm").style.display = "block";
    }
    else {
        document.getElementById("creditForm").style.display = "none";
    }
}
function ClearingCompanyForm() {
    if (counterCredit % 2 === 0) {
        counterClearingCompany = counterClearingCompany + 1;

        document.getElementById("ClearingCompanyForm").style.display = "block";
    }
    else {
        document.getElementById("ClearingCompanyForm").style.display = "none";
    }
}
window.main=new Main();
 