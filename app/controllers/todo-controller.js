import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos;
  console.log(store.State);

  let template = "";
  todos.forEach((todo) => (template += todo.Template));
  document.getElementById("todos").innerHTML = template;
}

export default class TodoController {
  constructor() {
    //NOTE DONE Remember to register your subscribers
    store.subscribe("todos", _drawTodos);
    TodoService.getTodos();
  }

  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todoObj = {
      //NOTE DONE build the todo object from the data that comes into this method
      description: form.newTodo.value,
      completed: false,
    };
    console.log(todoObj);
    console.log("^todoObj from controller");
    TodoService.addTodoAsync(todoObj);
    form.reset();
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
