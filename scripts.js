const calculateBtn = document.getElementById("calculate");

const tipAmountText = document.getElementById("tip-amount");
const totalPerPersonText = document.getElementById("total-per-person");

const billAmountInput = document.getElementById("bill-amount");
const numberOfPeopleInput = document.getElementById("number-of-people");

calculateBtn.addEventListener('click', () => {
    const billAmount = Number(billAmountInput.value);
    const numberOfPeolple = Number(numberOfPeopleInput.value);
    const selectedRadioBtn = document.querySelector('input[name="tip"]:checked');
    const tipSelected = selectedRadioBtn.value;

    const totalTip = Math.round(billAmount * tipSelected * 100) / 100;
    const totalBill = totalTip + billAmount;
    const perPerson = Math.round(totalBill / numberOfPeolple * 100) / 100;

    totalPerPersonText.innerHTML = formatPrice(perPerson);
    tipAmountText.innerHTML = formatPrice(totalTip);
});

const formatPrice = (price) => {
    let retVal = price.toString();
    const parts = retVal.split('.');
    if(parts[0].length === 1) {
        retVal = '0' + retVal;
    }
    if(parts[1].length === 1) {
        retVal += '0';
    }
    return retVal;
};