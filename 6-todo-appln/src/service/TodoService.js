
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
    editTodo(id, title) {
        this.todos = this.todos.map(todo => id === todo.id ? Object.assign({}, todo, { title }) : todo)
    }
    completeTodo(id) {
        this.todos = this.todos.map(todo => id === todo.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo)
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => id !== todo.id)
    }
    completeAll() {
        let isAllComplete = this.todos.every(todo => todo.completed);
        this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: !isAllComplete }))
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
    }
    getTodos(filter) {
        switch (filter) {
            case 'ALL':
                this.todos.forEach(todo => console.log(todo));
                return;
            case 'ACTIVE':
                this.todos.forEach(todo => {
                    if (!todo.completed) {
                        console.log(todo)
                    }
                });
                return;
            case 'COMPLETED':
                this.todos.forEach(todo => {
                    if (todo.completed) {
                        console.log(todo)
                    }
                });
                return;
        }
    }
}