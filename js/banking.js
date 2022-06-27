// // =========== handle deposit button event ===============

// document.getElementById('deposit-button').addEventListener('click', function(){

//     // ========== deposit input and update ===============

//     const depositInput = document.getElementById('deposit-input');
//     const newdepositAmountText = depositInput.value;
//     const newdepositAmount = parseFloat(newdepositAmountText);



//     // ========== setdeposit total =============
//     const depositTotal = document.getElementById('deposit-total');
//     const previousDepositText = depositTotal.innerText;
//     const previousDepositAmount = parseFloat(previousDepositText);
//     const newdepositTotal = previousDepositAmount + newdepositAmount;
//     depositTotal.innerText = newdepositTotal;


//     // ========== update account balance =================

//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);
//     const newBalanceTotal = previousBalanceTotal + newdepositAmount;
//     balanceTotal.innerText = newBalanceTotal;


//     // ====== clear deposit input field =========
//     depositInput.value = '';
// })




// // ============== handle widthdraw event handler ===================

// document.getElementById('withdraw-button').addEventListener('click', function(){
//     const withdrawInput = document.getElementById('withdraw-input');
//     const withdrawAmountText = withdrawInput.value;
//     const newWithdrawAmount = parseFloat(withdrawAmountText);


//     // =============== set widthdrawTotal ====================

//     const withdrawTotal = document.getElementById('withdraw-total');
//     const previousWithdrawText = withdrawTotal.innerText;
//     const previousWithdrawTotal = parseFloat(previousWithdrawText);
//     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
//     withdrawTotal.innerText = newWithdrawTotal;

//     // ========== update balance after withdraw amount =================

//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceText);
//     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
//     balanceTotal.innerText = newBalanceTotal;

//     // ======== clear widthdraw input field ===========
//     withdrawInput.value = '';
// })






// ===================================================================================
// ====================  functionally handle code and organize code ==================
// ==================== ===================== =================== ====================



// ============ input amount ================

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}


// ============ update total deposit and withdraw ===============

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const newTotal = previousTotal + amount;
    totalElement.innerText = newTotal;
}



// ================= get current balance control negative value ====================

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}



// =========== update balance for deposit and withdraw ==============

function updateBalance(newdepositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
   /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */

    const previousBalanceTotal = getCurrentBalance()

    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + newdepositAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalanceTotal - newdepositAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
}






// =========== handle deposit button event ===============
document.getElementById('deposit-button').addEventListener('click', function () {

    // ========== deposit input and update ===============
    const newdepositAmount = getInputValue('deposit-input');

    if (newdepositAmount > 0) {
        // ========== setdeposit total =============
        updateTotalField('deposit-total', newdepositAmount);


        // ========== update account balance =================
        updateBalance(newdepositAmount, true)
    }


})



// ============== handle widthdraw event handler ===================
document.getElementById('withdraw-button').addEventListener('click', function () {

    // =========== withdraw input and update =================
    const newWithdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance()
    if (newWithdrawAmount > 0 && newWithdrawAmount <= currentBalance) {
        // =============== set widthdrawTotal ====================
        updateTotalField('withdraw-total', newWithdrawAmount);

        // ========== update balance after withdraw amount =================
        updateBalance(newWithdrawAmount, false)

    }
    else{
        alert('Not available Balance')
    }

})



























