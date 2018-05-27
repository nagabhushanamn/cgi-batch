
export default class Todo {
    constructor(title) {
        Todo.id++;
        this.id = Todo.id;
        this.title = title;
        this.completed = false
    }
}
Todo.id = 0; // static var