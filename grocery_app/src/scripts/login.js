
let userPassword, userEmail, userInfo, result="", groceryList = {}, previousValue="";

const isLoginIn = ()  => {
    if(!userInfo) {
        document.getElementById("new-Item-Container").style.display = "none";
    }
    else {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("new-Item-Container").style.display = "block";
    }
}

function getUserList(currentUser) {
    document.getElementById("new-Item-Container").style.display = "block";
    if (currentUser.tasks === undefined) {
        return;
    }
    const tasks = currentUser["tasks"];
    Object.keys(tasks).forEach(key => {
        displayItem(tasks[key]);
    });
}
function login() {
    userEmail = document.getElementById("email").value;
    userPassword = document.getElementById("password").value;
    userInfo = JSON.parse(localStorage.getItem(userEmail));

    if (!userInfo) {
        window.alert("Error: No data found! Please re-enter");
        window.location.replace('../../index.html');
        return;
    }
    const hashPassword = hashCode(userPassword)
    if (userInfo['password'] != hashPassword) {
        window.alert("Error: Incorrect Password!");
        return;
    }
    document.getElementById("login-form").style.display = "none";
    getUserList(userInfo);   
}



