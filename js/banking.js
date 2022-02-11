
// deposit
// get the amount deposited er explanation

// better explained in the video 7, 8 and 9. so i should better watch them for explanation

// // deposit-button e click korle jate input er value ta ashe eijonno ekhane deposit-field re id dia dhoira nia aisha depositField namer variable declare korsi. jehetu deposit-field er input field e ami jeta input dicchi oita new deposit tai depositField er value ke niye newDepositAmount namer ekta variable declare korsi. tarpor deposit-total ke id dia nia aisha depositTotal e declare korsi. karon eitai amar total deposit. Prottekbar new deposit add korle ei total deposit tai previous deposit hoye jabe tai previousDepositAmount er moddhe depositTotal.innertext assign korsi. lastly newDepositTotal namer ekta variable declare korsi jeitar value holo previousDepositAmount + newDepositAmount. and eigula jehetu string tai eigula ke number e convert korsi parseFloat diye and jug korsi. ei depositTotal.innerText = newDepositTotal diye depositTotal er value update kore dicchi. 

document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceAmount) + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;
    // clear deposit field value
    depositField.value = '';
});

// withdraw
// withdraw tao almost same as deposit

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    // empty input error handling
    // if (withdrawField.value == '') {
    //     alert('please enter a number');
    //     return;
    // }
    const newWithdraw = withdrawField.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdraw = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdraw) + parseFloat(newWithdraw);
    withdrawTotal.innerText = newWithdrawTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceAmount) - parseFloat(newWithdraw);
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw field value
    withdrawField.value = '';
})