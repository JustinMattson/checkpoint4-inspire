import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let alias = document.getElementById("todos");
  let todos = store.State.todos;
  let visible = store.State.visible;
  visible ? alias.classList.remove("hidden") : alias.classList.add("hidden");
  console.log(store.State);
  console.log("^store.State");

  let template = "";
  todos.forEach((todo) => (template += todo.Template));
  alias.innerHTML = template;

  document.getElementById("todoCounts").innerText =
    "(" +
    store.State.todos.filter((t) => t.completed == true).length +
    "/" +
    store.State.todos.length +
    ")";
}

export default class TodoController {
  constructor() {
    //NOTE DONE Remember to register your subscribers
    store.subscribe("todos", _drawTodos);
    store.subscribe("visible", _drawTodos);
    TodoService.getTodos();
  }

  toggleVisible() {
    TodoService.toggleVisible();
  }
  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todoObj = {
      //NOTE DONE build the todo object from the data that comes into this method
      description: form.newTodo.value,
      completed: false,
    };
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
