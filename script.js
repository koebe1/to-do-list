// Create a to do list app

const inputField = document.getElementById("todoInput");
const list = document.getElementById("todoList");
const header = document.getElementById('header');


const addItem = () => {
    const item = document.getElementById("todoInput").value;
    const text = document.createTextNode(item);
    const newItem = document.createElement("li");


    if (item === "") {
        showErrorMessage();
    
    } else {
        newItem.appendChild(text);
        const newList = list.appendChild(newItem);
        inputField.value = "";

        //save in local storage
        //localStorage.setItem("todos", item);
    }
}

const showErrorMessage = () => {
    const error = document.createElement("h2");
    const errorText = document.createTextNode("Please add an item!");
    error.appendChild(errorText);
    header.appendChild(error);
}

const removeItem = () => {
    const remove = list.lastElementChild;
    remove.remove();
    //remove in local storage
    //localStorage.removeItem("todos", remove);
}


// const onInit = () => {
//     const inputField = document.getElementById("todoInput");
//     const list = document.getElementById("todoList");
//     const item = document.getElementById("todoInput").value;
//     const li = document.createElement("li");
//
//     let toDos = localStorage.todos;
//     const text = document.createTextNode(toDos);
//     console.log(toDos);
//     const newLi = li.appendChild(text);
//     console.log(newLi);
//     list.appendChild(newLi)
//
// }
//
// onInit();
