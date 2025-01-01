// login system
function login() {
    var username = document.getElementById("userid").value;
    var password = document.getElementById("password").value;

    if (username == "Surya@vizhigal" && password == "Surya@vizhigal1234567890") {
        document.getElementById("successfully").style.display = "block";
        setTimeout(() => {
            window.location.href = "content_post.html";
        }, 3000); // 3000 milliseconds = 3 seconds
    } else {
        document.getElementById("failed").style.display = "block";
    }
}

// LATEST TREND


function trent() {
    var username = document.getElementById("userid").value;
    var password = document.getElementById("password").value;
    var news = document.getElementById("LATEST_TREND").value;
    var abc = news;
    if (username == "Surya@vizhigal" && password == "Surya@vizhigal1234567890") {
        alert(abc);
        document.getElementById("running").innerHTML = abc;
    } 
    else {
        alert("Login failed");   
    }
}

