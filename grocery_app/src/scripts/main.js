function loginFormHide() {
    document.getElementById("registerFrom").style.display="block";
    document.getElementById("loginbtn").style.display="none";
    document.getElementById("registerbtn").style.display="none";
    document.getElementById("backbtnClass").style.display="block";
    document.getElementById("addClass").style.display="none";
    document.getElementById("savebtnClass").style.display="none";
    // document.getElementById("bucketbtnClass").style.display="none";
}

function registerFormHide() {
    document.getElementById("loginform").style.display="block";
    document.getElementById("registerbtn").style.display="none";
    document.getElementById("loginbtn").style.display="none";
    document.getElementById("logoutbtnClass").style.display="none";
    document.getElementById("backbtnClass").style.display="block"
    document.getElementById("addClass").style.display="none";
    document.getElementById("savebtnClass").style.display="none";
    // document.getElementById("bucketbtnClass").style.display="none";
}

function sizeHandle() {
    let size  = 0;
    function increaseSize() {
      return ++size;
    };
    function decreaseSize() {
        if(size == 0)
            throw 'Error: Grocery size is zero';
        return --size;
    };
    function displaySize() {
        return size;
    };
    return {displaySize, increaseSize, decreaseSize};
  }


window.onload = function() {
    let groceryList;
    let isDisplay;
    let tasks;
    let userEmail;
    document.getElementById("registerFrom").style.display="none";
    document.getElementById("registerbtn").style.display="block";
    document.getElementById("loginbtn").style.display="block";
    document.getElementById("logoutbtnClass").style.display="none";
    document.getElementById("loginform").style.display="none";
    document.getElementById("backbtnClass").style.display="none"
    document.getElementById("addClass").style.display="none";
    document.getElementById("savebtnClass").style.display="none";
    // document.getElementById("bucketbtnClass").style.display="none";
}
