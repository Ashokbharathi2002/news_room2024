// login system
function login() {
    var username = document.getElementById("userid").value;
    var password = document.getElementById("password").value;

    if (username == "Surya@vizhigal" && password == "Surya@vizhigal1234567890") {
        alertbox.render({
            alertIcon: 'success',
            title: 'Thank You!',
            message: 'You have logged in successfully.',
            btnTitle: 'Ok',
            border:true
        });
        document.getElementById("editing_post").style.display = "block";
    } else {
        alertbox.render({
            alertIcon: 'error',
            title: 'Thank You!',
            message: 'Your login attempt has failed',
            btnTitle: 'Ok',
            border:true
        });
    }
}

// LATEST TREND
function test(){
    var x = document.getElementById("testing").value;
}

var runningnews = document.getElementById("running").textContent;
console.log(runningnews)