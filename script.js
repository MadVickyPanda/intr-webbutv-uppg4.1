//script for my todo list

const completedElement = document.querySelector("#completedNumber");
const inputTodo= document.querySelector("#input1");
const addToDoBtn=document.querySelector("#addTodoBtn");
const infoTextElement = document.querySelector("small");
const todoList=document.querySelector("#todoList");
let todoText = "";
let completed = 0;

addToDoBtn.addEventListener("click", addTodo);
itemText.addEventListener("click", )

function addTodo(){
    // things that will happen when you click the button
    infoTextElement.textContent="";
todoText = inputTodo.value;
 if (todoText.length == 0){
    infoTextElement.textContent="Du måste skriva något!"
    return;
 }

const item = document.createElement('li');
todoList.appendChild(item);

const itemText = document.createElement('span');
itemText.innerText = todoText;

//add eventlistener to span with text
itemText.addEventListener("click",
    function(){
        if(itemText.getAttribute('class') == "completed") {
        itemText.setAttribute('class', "");
        completed--;
        completedElement.textContent= completed +" Slutförd!"
             }
        else 
        {
            itemText.setAttribute("class", "completed");
            completed++;
            completedElement.textContent= completed + " Sluförd!"
        }
    }


)
item.appendChild(itemText);



//empty input

inputTodo.value="";
}
