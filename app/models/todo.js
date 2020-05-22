export default class Todo {
  constructor(data) {
    this.id = data.id || data._id;
    this.description = data.description;
    this.completed = data.completed;
  }
  get Template() {
    return /*html*/ `
    <div>
      <div>
        <i class="far fa-flag text-success"></i>
        <i class="fas fa-hourglass-half text-warning"></i>
        <i class="fas fa-flag-checkered"></i>
      </div>
      <div>#${this.id}</div>
      <div>${this.description}</div>
      <div>${this.completed}</div>
      <div><i class="fas fa-times text-danger text-shadow action" onclick="app.todoController.removeTodo('${this.id}')"></i></div>
    </div>
    `;
  }
}

// "data": [
//   {
//     "completed": true,
//     "_id": "5b75e55a2318eb00140553fd",
//     "description": "a cool thing",
//     "user": "mark",
//     "__v": 0
