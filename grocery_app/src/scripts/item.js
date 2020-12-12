
// Function is used to add the add item to the todo list.

function displayItem(item) {
    addGrocery(item);
}

document.getElementById("addData").addEventListener("keyup", function (event) {
    const value = document.getElementById("addData").value;
    if(event.key == "Enter") {
        if(!value) {
            window.alert("Please enter the task");
            return;
        }
        if(value) {
            addGrocery(value);
            document.getElementById('addData').value = '';
        }
    }
  });

function addItem() {
    const currentUser = JSON.parse(localStorage.getItem(userEmail));
    const value = document.getElementById('addData').value;
    if(!value) {
        window.alert("Please enter the task");
        return;
    }
    if(value) {
        addGrocery(value);
        document.getElementById('addData').value = '';
    }
}

// function is used to remove item from todo list.
function removeitem() {
    const list = document.getElementById('ul_list');
    const item = this.parentNode;
    const parent = item.parentNode;
    parent.removeChild(item);
    groceryList[item.childNodes[0].value] = "";
    const child = list.childElementCount;
    document.getElementById("remainingItem").innerHTML = `${5 - child} item can be added`;
}




// function to edit item in todo list.


function update(event) {
    const parent = event.parentNode;
    const input = parent.childNodes[0];
    input.readOnly = true;
    if(previousValue === input.value)
        return;
    try {
        isalreadyExist(input.value);
    }
    catch(err) {
        event.value = previousValue;   
        window.alert(err);
        return;
    }
    groceryList[input.value] = input.value;
    groceryList[previousValue] = "";

}

function editItem() {;
    const parent = this.parentNode;
    const input = parent.childNodes[0];
    previousValue = input.value;
    input.readOnly = false;
}
// function is used as an helper to add item in todo list.

function canAdd() {
    const list = document.getElementById('ul_list');
    const child = list.childElementCount;
    if(child === 5) {
        throw "Can't add more items";
    }
}


function isalreadyExist(item) {
    if(groceryList[item]) {
       throw "This Item already exist";
    }
}


function addGrocery(text) {
    try {
        canAdd(text);
        isalreadyExist(text);
    }
    catch(err) {
        window.alert(err);
        return;
    }
    groceryList[text] = text;

    // Get the items
    const list = document.getElementById('ul_list');

    // New list item element
    const item = document.createElement('li');
    item.setAttribute('id', 'myid');
    item.setAttribute('value', text);

    // Input field element
    const input = document.createElement('input');
    input.setAttribute('value', text); //  set the attribute of input text to text
    input.setAttribute('onchange',"update(this)"),
    input.readOnly = true; // set read mode on for the default type.
    input.style.border = "none";
    input.style.borderColor = "transparent";
    input.style.background = "none";

    
    const edit = document.createElement('button');
    edit.classList.add('edit');
    const EditButtonText = document.createTextNode("Edit");
    edit.appendChild(EditButtonText);
    // Css for edit button 
    edit.style.color = 'blue'
    edit.addEventListener('click', editItem);

    const remove = document.createElement('button');
    remove.classList.add('remove');
    const RemoveButtonText = document.createTextNode("Delete");
    remove.appendChild(RemoveButtonText);
    // Css for remove button
    remove.style.color = 'red';
    remove.addEventListener('click', removeitem);

    item.appendChild(input);
    item.appendChild(edit);
    item.appendChild(remove);
    
    edit.style.textAlign = 'center';
    remove.style.textAlign = "center";
    item.style.height = "auto";
    list.appendChild(item);
    const child = list.childElementCount;
    document.getElementById("remainingItem").innerHTML = `${5 - child} item can be added`;
}
  