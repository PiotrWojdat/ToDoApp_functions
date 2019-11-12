var todos = ['Buy new tourtule'];
var input = prompt("What you want to do?");

while(input !== "quit"){
    if(input === "list"){
        listTodos();
    } else if (input === "new"){
        addTodos();
    } else if (input === 'delete'){
        deleteTodo();
    }
    // ask again for new todo
    input = prompt('What would you like to do?')
}

console.log('OK, you quit the app');


function listTodos(){
    console.log('***********');
    todos.forEach(function(todo, i){
        console.log(i + ": " +todo);
    })
    console.log('***********');
}

function addTodos(){
    // ask for a new todo
    var newTodo = prompt('Enter a new todo');
    // add todos to array
    todos.push(newTodo);
    console.log('todo added');
}

function deleteTodo(){
var index = prompt('Enter index of todo to delete');
// delete a todo
    //splice methodlist
    todos.splice(index,1);
    console.log('deleted todo')
};