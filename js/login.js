document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const loginInputEmail = document.getElementById('login-input-email').value;
    const loginInputPss = document.getElementById('login-input-pss').value;

    if(loginInputPss === '1'){
        alert('login');
        window.location.href ='/home.html';
    }
    else{
        alert('Worng Password try again');
    }

})