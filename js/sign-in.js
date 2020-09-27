function check() {
    var adminUsername = "admin";
    var adminPassword = "admin123";
    var checkName = document.querySelector(".sign-in-username .form-control").value;
    var checkPassword = document.querySelector(".sign-in-password .form-control").value;

    if(checkName === adminUsername && checkPassword === adminPassword)
    {
        alert("Congratulation!");
        window.location.href = "index-2nd.html";
    }
    else {
        alert("wrong username or password");
    }
}