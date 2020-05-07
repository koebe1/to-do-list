// Create a to do list app
const addItem = () => {
    const item = document.getElementById("todoInput").value;
    const text = document.createTextNode(item);
    const newItem = document.createElement("li");
    const list = document.getElementById("todoList");

    newItem.appendChild(text);
    list.appendChild(newItem);
}

const removeItem = () => {
    const list = document.getElementById('todoList');
    const lastItem = list.lastElementChild;
    const remove = lastItem.remove();

}
