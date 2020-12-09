function deleteAllList() {
    let list = document.getElementById("Additem");
    const childSize = list.childNodes.length;

    for(let idx=0; idx < childSize; ++idx) {
        list.removeChild(list.childNodes[0]);
        if(list.childNodes[0] === undefined) break;
        groceryList[list.childNodes[0].value] = "";
    }
} 

function logout() {
    // update grocery List
    saveData();
    deleteAllList();
    registerFormHide();
  }
  
