let username;
let password;

document.getElementById("log").onclick = function(){
    username = document.getElementById("email").value;
    document.getElementById("9876").textContent = `${username}`
    console.log(username)
}

document.getElementById('log').onclick = function(){
    password = document.getElementById('Password').value;
    document.getElementById('1234').textContent = `${password}`
    console.log(password)
}

