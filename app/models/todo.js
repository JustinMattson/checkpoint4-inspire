export default class Todo {
  constructor(data) {
    this.id = data.id || data._id;
    this.description = data.description;
    this.completed = data.completed;
  }
  get Template() {
    return /*html*/ `
    <div class="row"class="d-flex justify-content-between">
      ${this.SubTemplate}
      <div class="col-1 text-center">
        <i class="fas fa-times text-danger text-shadow action" onclick="app.todoController.removeTodo('${this.id}')"></i>
      </div>
    </div>
    <div class="col-12 text-muted small">#${this.id}</div>
    `;
  }

  get SubTemplate() {
    if (!this.completed) {
      return /*html*/ `
      <div class="col-1 text-center">
        <i class="far fa-flag text-success action" onclick="app.todoController.toggleTodoStatus('${this.id}')"></i>
      </div>
      <div class="col-10">
        ${this.description}
      </div>
  `;
    }
    return /*html*/ `
    <div class="col-1 text-center">
      <i class="fas fa-flag-checkered text-danger action" onclick="app.todoController.toggleTodoStatus('${this.id}')"></i>
    </div>
    <div class="col-10" style="text-decoration:line-through;">
      ${this.description}
    </div>
  `;
  }
}
