let username;

document.getElementById("log").onclick = function(){
    username = document.getElementById("email").value;
    document.getElementById("9876").textContent = `${username}`
}