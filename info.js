let username;
let password;

document.getElementById("log").onclick = function(){
    username = document.getElementById("email").value;
    password = document.getElementById("password").value;
    document.getElementById("9876").textContent = `${username}`
    document.getElementById("9876").textContent = `${password}`
    console.log(username)
    console.log(password)
}
