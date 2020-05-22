import Todo from "../models/todo.js";
import store from "../store.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/toyvo/todos/",
  timeout: 8000,
});

class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await todoApi.get();
    store.commit(
      "todos",
      res.data.data.map((todo) => new Todo(todo))
    );
    console.log(store.State.todos);

    //TODO Handle this response from the server
  }

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

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find((todo) => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
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
