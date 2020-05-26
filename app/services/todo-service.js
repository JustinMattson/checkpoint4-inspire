import Todo from "../models/todo.js";
import store from "../store.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/toyvo/todos/",
  timeout: 8000,
});

class TodoService {
  toggleVisible() {
    store.State.visible
      ? (store.State.visible = false)
      : (store.State.visible = true);
    store.commit("visible", store.State.visible);
  }
  async getTodos() {
    try {
      let res = await todoApi.get();
      store.commit(
        "todos",
        res.data.data.map((todo) => new Todo(todo))
      );
    } catch (e) {
      console.error(e);
    }
    //NOTE DONE Handle this response from the server
    // added try/catch if that is what the TO-DO was about?
  }
  // POST
  addTodoAsync(todoObj) {
    let todo = new Todo(todoObj);
    todoApi
      .post("", todo)
      .then((res) => {
        this.getTodos();
      })
      .catch((e) => console.error(e));
    //NOTE done? Handle this response from the server (hint: what data comes back, do you want this?)
  }
  // PUT
  toggleTodoStatusAsync(todoId) {
    let todoObj = store.State.todos.find((todo) => todo.id == todoId);
    //console.log(todoObj.completed + "before ternary");
    //NOTE DONE Make sure that you found a todo,
    if (todoObj) {
      //		and if you did find one
      //		change its completed status to whatever it is not (ex: false => true or true => false)
      todoObj.completed
        ? (todoObj.completed = false)
        : (todoObj.completed = true);
      //console.log(todoObj.completed + "after ternary");
      todoApi.put(todoId, { completed: todoObj.completed }).then((res) => {
        this.getTodos();
      });
    }
    //todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
    // What does this todo mean? ~jm
  }

  removeTodoAsync(todoId) {
    //NOTE DONE Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    todoApi
      .delete(todoId)
      .then((res) => {
        this.getTodos();
      })
      .catch((err) => console.error(err));
  }
}

const todoService = new TodoService();
export default todoService;
