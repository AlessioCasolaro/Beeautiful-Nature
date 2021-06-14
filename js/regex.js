function validateLettore(){
    
    
    var nome = document.getElementById ("nome");
    var cognome = document.getElementById ("cognome");
    var email = document.getElementById ("email");
    var password = document.getElementById ("password");
   

    //REGEXP
    var rexnome=/^[A-zÀ-ù ‘-]{2,}$/;
    var rexemail=/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,10}$/;
    var rextel=/^\d+$/;
    var rexvia=/^[0-9A-zÀ-ù ‘-]{2,30}$/;
    //FINE REGEXP
  
    if(!rexnome.test(nome.value)){
        document.getElementById("nomeLabel").innerText = "Formato nome errato.";
        nome.value='';
        nome.classList.add('error-placeholder');
        nome.focus();
        return false;
    }
    
    if(!rexnome.test(cognome.value)){
        document.getElementById("cognomeLabel").innerText = "Formato cognome errato.";
        cognome.value='';
        cognome.classList.add('error-placeholder');
        cognome.focus();
        return false;
    }


    if(!rexemail.test(email.value)){
        document.getElementById("emailLabel").innerText = "Formato email errato.";
        email.value='';
        email.classList.add('error-placeholder');
        email.focus();
        return false;
    }

    return window.location.href = "../index-login.html";
    
}
 
