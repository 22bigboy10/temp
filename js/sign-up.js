function check() {
    var i = 0;
    var username = document.querySelector(".sign-up-username .form-control").value;
    var usernamePattern = /^[a-zA-Z]{3,16}$/g;
    if(!usernamePattern.test(username)) {
        document.querySelector(".signup-form .u-feedback").style.display = 'block';
    }
    else {
        document.querySelector(".signup-form .u-feedback").style.display = 'none';
        i++
    }

    email = document.querySelector(".sign-up-email .form-control").value;
    emailPattern = /^[a-z][a-z0-9]+@+[a-z]{2,5}\.[a-z]{2,5}/g;
    if(!emailPattern.test(email)) {
        document.querySelector(".signup-form .email-feedback").style.display = "block";
    }
    else {
        document.querySelector(".signup-form .email-feedback").style.display = "none";
        i++;
    }

    var password = document.querySelector(".sign-up-password .form-control").value;
    var passwordPattern = /^[0-9 a-z]{6,16}$/g;
    if(!passwordPattern.test(password)) {
        document.querySelector(".signup-form .p-feedback").style.display = "block";
    }
    else {
        document.querySelector(".signup-form .p-feedback").style.display = "none";
        i++
    }

    var cofirmPassword = document.querySelector(".sign-up-cofirm-password .form-control").value;
    if(cofirmPassword === password) {
        document.querySelector(".signup-form .cp-feedback").style.display = "none";
    }
    else {  
        document.querySelector(".signup-form .cp-feedback").style.display = "block";
        i++
    }

    var checkedBox = document.querySelector(".check-box .remember").checked;
    if(checkedBox == true) {
        i++;
    } 

    if(i==4){
        alert("congratulation!");
        window.location.href = "sign-in.html";
    }
    else {
        alert("oop!");
    }
    
}