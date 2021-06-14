function login() {
    var email = document.getElementById("floatingInput");
    var password = document.getElementById("floatingPassword");
    var error = document.getElementById("error");
    
    if(email.value =="email@prova.it" && password.value == "password")
        window.location.href = "../index-login.html";

    else{
        email.placeholder = "Email o password errati.";
        email.value='';
        email.classList.add('error-placeholder');
        email.focus();

        password.placeholder = "Email o password errati.";
        password.value='';
        password.classList.add('error-placeholder');
        password.focus();

        error.classList.remove('d-none');
        error.classList.add('d-block');

    }
}