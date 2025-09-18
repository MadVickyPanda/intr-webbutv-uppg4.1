//script for my todo list

const completedElement = document.querySelector("#completedNumber");
const inputTodo= document.querySelector("#input1");
const addToDoBtn=document.querySelector("#addTodoBtn");
const infoTextElement = document.querySelector("small");
const todoList=document.querySelector("#todoList");
let todoText = "";
let completed = + 0;

addToDoBtn.addEventListener("click", addTodo);

function addTodo(){
    // things that will happen when you click the button
todoText = inputTodo.value;
const item = document.createElement('li');
todoList.appendChild(item);

const itemText = document.createElement('span');
itemText.innerText = todoText;
item.appendChild(itemText);

}

