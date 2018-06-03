
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'
import TodoService from './service/TodoService';


//-----------------------------------------------------
let service = new TodoService();
//-----------------------------------------------------


// using DOM API thru Jquery Lib

let TodoView = {
    init() {
        service.completeTodo(1);
        let promise = service.loadTodos();
        promise.then(todos => {
            this.todos = todos;
            this.render();
        });
        this.bindEvents();
    },
    bindEvents() {
        let $newTodo = $('#new-todo')
        $newTodo.on('keyup', this.createNewTodo.bind(this));
    },
    createNewTodo(e) {
        let title = e.target.value;
        if (title && e.which === 13) {
            let promise = service.addTodo(title);
            promise.then(todo => {
                this.todos.concat(todo)
                this.render();
                e.target.value = ''
            })

        }
    },
    render() {
        this.todos = service.getTodos();
        let $todoList = $('#todo-list'); //
        let todoHandlebarTemplate = Handlebars.compile($('#todo-handlebar-template').html())
        let htmlOutput = todoHandlebarTemplate(this.todos)
        $todoList.html(htmlOutput)
    }
};

TodoView.init();






//-----------------------------------------------------
