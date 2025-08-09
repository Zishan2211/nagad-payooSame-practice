document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyinput = inputValeByid('add-money-amount');
    const addpinNumber = inputValeByid('add-money-pin');

    if(addpinNumber === 1){
        const Balance = getTextValueId('avaible-balance');
        const newBalance = Balance + addMoneyinput ;

        document.getElementById('avaible-balance').innerText = newBalance;

        const p =document.createElement('p');
        p.innerText = `added: ${addMoneyinput} Tk. New Balence ${newBalance}`;

        document.getElementById('feturesId').appendChild(p);
    }
    else{
        alert('worng pin plase try agian');
    }

})