let todoList = [
    {
        item: 'Buy Milk',
        dueDate: '15/10/24'
    },
    {
        item: 'Go to College',
        dueDate: '15/10/24'
    }
];
displayItems();

function addTodo() {
    let inputElement = document.querySelector("#todo-input");
    let dateElement = document.querySelector("#todo-date");
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    
    inputElement.value = '';
    dateElement.value = '';         
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let todoItem = todoList[i].item;
        let todoDate = todoList[i].dueDate;
        let {item, dueDate} = todoList[i];
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="todo-dlt" onClick="todoList.splice(${i}, 1);
            displayItems();">Delete</button>
        `;   
    }
    containerElement.innerHTML = newHtml;

}
