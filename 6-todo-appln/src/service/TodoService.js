
import Todo from '../model/Todo';
// mutable vs Immutbale
export default class TodoService {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        let newTodo = new Todo(title);
        // this.todos.push(newTodo); // mutational
        // this.todos = [...this.todos, newTodo];
        // or
        this.todos = this.todos.concat(newTodo);
    }
    editTodo(id, newTitle) {

    }
    completeTodo(id) {

    }
    deleteTodo(id) {

    }
    completeAll() {

    }
    clearCompleted() {

    }
    getTodos(filter) {
        switch (filter) {
            case 'ALL':
                this.todos.forEach(todo => console.log(todo));
        }
    }
}