document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const cashoutamount = inputValeByid('cash-out-amount');
    const cashoutpin = inputValeByid('cash-out-pin');

    if(isNaN(cashoutamount)){
        alert('Failed to Cash out')
        return;
    }

    if (cashoutpin === 1 ) {
        const Balance = getTextValueId('avaible-balance');
        const newBalance = Balance - cashoutamount;

        document.getElementById('avaible-balance').innerText = newBalance;

        const p = document.createElement('p');
        p.innerText = `cash Out ${cashoutamount} Tk. New Balance ${newBalance}`;
        document.getElementById('feturesId').appendChild(p);
    }
    else{
        alert('worng pin please try again')
    }

})