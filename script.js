// ================================
// MINI ATM SYSTEM
// ================================


// Account Information

let account = {

    name: "ATUL YADAV",

    balance: 50000,

    pin: 1234,

    type: "Savings"

};


// Login Function

function login() {

    let enteredPin =
        Number(document.getElementById("pin").value);

    let message =
        document.getElementById("login-message");


    if (enteredPin === account.pin) {

        message.innerHTML =
            "✅ Login Successful!";

        message.style.color = "green";


        // Hide login

        document
            .getElementById("login-section")
            .classList.add("hidden");


        // Show ATM menu

        document
            .getElementById("atm-section")
            .classList.remove("hidden");

    }

    else {

        message.innerHTML =
            "❌ Invalid PIN. Please try again.";

        message.style.color = "red";

    }

}


// ================================
// CHECK BALANCE
// ================================

function checkBalance() {

    hideOperations();

    document.getElementById("result").innerHTML =
        "💰 Your Balance is ₹" +
        account.balance.toLocaleString("en-IN");

}


// ================================
// SHOW WITHDRAW
// ================================

function showWithdraw() {

    hideOperations();

    document
        .getElementById("withdraw-section")
        .classList.remove("hidden");

}


// ================================
// WITHDRAW MONEY
// ================================

function withdrawMoney() {

    let amount =
        Number(
            document.getElementById("withdraw-amount").value
        );


    if (amount <= 0) {

        document.getElementById("result").innerHTML =
            "❌ Please enter a positive amount.";

        return;
    }


    if (amount > account.balance) {

        document.getElementById("result").innerHTML =
            "❌ Insufficient balance.";

        return;
    }


    // Update balance

    account.balance =
        account.balance - amount;


    document.getElementById("result").innerHTML =
        "✅ Money withdrawn successfully!<br>" +
        "💰 Withdrawn: ₹" +
        amount.toLocaleString("en-IN") +
        "<br>" +
        "💳 New Balance: ₹" +
        account.balance.toLocaleString("en-IN");


    document.getElementById("withdraw-amount").value = "";

}


// ================================
// SHOW DEPOSIT
// ================================

function showDeposit() {

    hideOperations();

    document
        .getElementById("deposit-section")
        .classList.remove("hidden");

}


// ================================
// DEPOSIT MONEY
// ================================

function depositMoney() {

    let amount =
        Number(
            document.getElementById("deposit-amount").value
        );


    if (amount <= 0) {

        document.getElementById("result").innerHTML =
            "❌ Please enter a positive amount.";

        return;
    }


    // Add money to balance

    account.balance =
        account.balance + amount;


    document.getElementById("result").innerHTML =
        "✅ Money deposited successfully!<br>" +
        "💵 Deposited: ₹" +
        amount.toLocaleString("en-IN") +
        "<br>" +
        "💳 New Balance: ₹" +
        account.balance.toLocaleString("en-IN");


    document.getElementById("deposit-amount").value = "";

}


// ================================
// ACCOUNT DETAILS
// ================================

function accountDetails() {

    hideOperations();

    document.getElementById("result").innerHTML =

        "<strong>👤 ACCOUNT DETAILS</strong><br><br>" +

        "Account Holder: " +
        account.name +
        "<br>" +

        "Account Type: " +
        account.type +
        "<br>" +

        "Account Balance: ₹" +
        account.balance.toLocaleString("en-IN");

}


// ================================
// LOGOUT
// ================================

function logout() {

    alert("Thank you for using ATM System!");


    // Reset page

    document
        .getElementById("atm-section")
        .classList.add("hidden");


    document
        .getElementById("login-section")
        .classList.remove("hidden");


    document
        .getElementById("pin").value = "";


    document
        .getElementById("result").innerHTML = "";

}


// ================================
// HIDE OPERATIONS
// ================================

function hideOperations() {

    document
        .getElementById("withdraw-section")
        .classList.add("hidden");


    document
        .getElementById("deposit-section")
        .classList.add("hidden");

}