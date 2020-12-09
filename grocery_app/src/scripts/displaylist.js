
// Function is used to add the add item to the todo list.

function displayItem(item) {
    addGrocery(item);
}

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
    const item = this.parentNode.parentNode;
    const parent = item.parentNode;
    parent.removeChild(item);
    groceryList[item.childNodes[1].value] = "";
}

// function to make complete when editing is done in todo list.
function completeItem() {
    const parent = this.parentNode.parentNode;
    const input = parent.childNodes[1];
    input.readOnly = true;
}

// function to edit item in todo list.
function editItem() {

    const parent = this.parentNode.parentNode;
    const input = parent.childNodes[1];
    // input.readOnly = false;

    const item = document.createElement('div');
    item.setAttribute('id', 'edit-item');
    
    const data = document.createElement('input');
    data.setAttribute('value', input.value);
    data.readOnly = false;

    const updateBtn = document.createElement('button');
    updateBtn.classList.add('')

}
// function is used as an helper to add item in todo list.
function addGrocery(text) {
    if(groceryList[text]) {
        window.alert("This Item already exist");
        return;
    }
    groceryList[text] = text;

    // Get the items
    const list = document.getElementById('Additem');

    // New list item element
    const item = document.createElement('li');
    item.setAttribute('id', 'myid');
    item.setAttribute('value', text);

    // Input field element
    const input = document.createElement('input');
    input.setAttribute('value', text); //  set the attribute of input text to text
    input.readOnly = true; // set read mode on for the default type.

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const remove = document.createElement('button');
    remove.classList.add('remove');
    const RemoveButtonText = document.createTextNode("Delete");
    remove.appendChild(RemoveButtonText);
    // Css for remove button
    remove.style.color = 'red';
    remove.addEventListener('click', removeitem);

    const edit = document.createElement('button');
    edit.classList.add('edit');
    const EditButtonText = document.createTextNode("Edit");
    edit.appendChild(EditButtonText);
    // Css for edit button 
    edit.style.color = 'blue'
    edit.addEventListener('click', editItem);

    const complete = document.createElement('button');
    complete.classList.add('complete');
    const completetButtonText = document.createTextNode("Complete");
    complete.appendChild(completetButtonText);
    // Css for complete button
    complete.style.color = 'green';
    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(edit);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    item.appendChild(input);
    item.style.textAlign = 'center';

    list.insertBefore(item, list.childNodes[0]);
}
