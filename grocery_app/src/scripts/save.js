function saveData() {
    let parseObj = {};
    for(let key in groceryList) {
        if(groceryList[key] != "") parseObj[key] = groceryList[key];
    }
    let userInfo = JSON.parse(localStorage.getItem(userEmail));
    userInfo["tasks"] = parseObj;
    localStorage.setItem(userEmail, JSON.stringify(userInfo));
}

