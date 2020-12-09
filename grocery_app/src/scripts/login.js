
function getUserList(currentUser) {
    groceryList = {};
    if(currentUser.tasks === undefined) {
        return;
    }
    const tasks = currentUser["tasks"];
    // UserGrocerySize = Object.keys(tasks).length;
    // document.getElementById("bucketData").value = 5 - currentUser.displaySize();
    Object.keys(tasks).forEach(key => {
        displayItem(tasks[key]);
    });
}

function login() {
    
    userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("loginPassword").value;
    let userInfo = JSON.parse(localStorage.getItem(userEmail));

    document.getElementById("loginform").reset();

    if(!userInfo) {
        window.alert("Error: No data found!");
        return;
    }
    const hashPassword = hashCode(userPassword)
    if(userInfo['password'] != hashPassword) {
        window.alert("Error: Incorrect Password!");
        return;
    }
    document.getElementById("loginform").style.display="none";
    document.getElementById("loginbtn").style.display="none";
    document.getElementById("logoutbtnClass").style.display="block";
    document.getElementById("backbtnClass").style.display="none";
    document.getElementById("addClass").style.display="block";
    document.getElementById("savebtnClass").style.display="block";
    // document.getElementById("bucketbtnClass").style.display="block";    
    getUserList(userInfo);
}

