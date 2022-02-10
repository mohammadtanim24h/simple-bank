
// deposit

document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;
    // clear deposit field value
    depositField.value = '';
})