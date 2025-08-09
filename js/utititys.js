function inputValeByid(id){
    const inputAmount = document.getElementById(id).value;
    const inputAmountNumber = parseFloat(inputAmount);
    return inputAmountNumber;
}

function getTextValueId(id){
    const getAvaibleBalance = document.getElementById(id).innerText;
    const getAvaibleBalanceNum = parseFloat(getAvaibleBalance);
    return getAvaibleBalanceNum;
}

function showSectionID (id){
    document.getElementById('add-moneyId').classList.add('hidden');
    document.getElementById('cash-OutId').classList.add('hidden');
    document.getElementById('feturesId').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}