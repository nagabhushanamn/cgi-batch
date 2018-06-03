
import Todo from '../model/Todo';

export default class TodoService {
    constructor() {
        this.todos = [
            new Todo('eat pizaa'),
            new Todo('watch IPL'),
        ];
    }
    addTodo(title) {
        let newTodo = new Todo(title);
        // this.todos.push(newTodo); // mutational
        // this.todos = [...this.todos, newTodo];
        // or
        return fetch("http://localhost:8080/api/todos", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo)
        })
            .then(response => response.json())
            .then(todo => {
                this.todos = this.todos.concat(newTodo);
                return todo
            })
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
    getTodos() {
        return this.todos;
    }
    loadTodos(filter) {
        let promise = fetch("http://localhost:8080/api/todos")
            .then(response => response.json())
            .then(todos => {
                this.todos = todos;
                return todos
            })
        return promise;
    }
}