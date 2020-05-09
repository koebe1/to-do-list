// Create a to do list app
const addItem = () => {
    const inputField = document.getElementById("todoInput");
    const item = document.getElementById("todoInput").value;
    const text = document.createTextNode(item);
    const newItem = document.createElement("li");
    const list = document.getElementById("todoList");

    newItem.appendChild(text);
    list.appendChild(newItem);
    inputField.value = "";

}

const removeItem = () => {
    const list = document.getElementById('todoList');
    const remove = list.lastElementChild.remove();
}
