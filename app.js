//selectors
const todoInput=document.querySelector(".todo-input")
const todoButton=document.querySelector(".todo-button")
const todoList=document.querySelector(".todolist")
const filterOption= document.querySelector(".filterTodo")
//event listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click", filterTodo);
//functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //creating todo div
    const todoDiv= document.createElement('div') ;
    todoDiv.classList.add('todo');
    // create LI
    const newTodo=document.createElement('li') ;
    //adding entered text
    newTodo.innerText= todoInput.value;
    newTodo.classList.add('todo-item');
    //making li a child of the div
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fa fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fa fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
   //clear todo inout value after entering and appending
     todoInput.value='';

   
     
}

function deleteCheck(e){
const item= e.target;
//delete
if(item.classList[0]==="trash-btn"||item.classList[0]==="fa-trash"){
    const parent= item.parentElement;
    parent.remove();
}

//check mark
if(item.classList[0]==="completed-btn"||item.classList[0]==="fa-check"){
    const parent= item.parentElement;
    parent.classList.toggle('completed');
}
}


// filtering and displaying
function filterTodo(e){
    const todos= todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo){
        switch(filterOption.value){
            case "all":
                todo.style.display= 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display= 'flex';
                }
                else{
                    todo.style.display= 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display= 'flex';
                }
                else{
                    todo.style.display= 'none';
                
                }
                break;
        }
    });
}