import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todos: Todo[];

  @Input() filterCondition: string;

  @Output() todosChange = new EventEmitter<Todo[]>();


  constructor() { }

  ngOnInit() {
  }

  toggleComplete(todo: Todo) {
    this.todos = this.todos.map(_todo => {
      if (_todo.id === todo.id) {
        _todo.isCompleted = !_todo.isCompleted;
      }
      return _todo;
    });
    this.todosChange.emit(this.todos);
    // todo.isCompleted = !todo.isCompleted;
  }

  removeToDo(idx: number) {
    this.todos.splice(idx, 1);
    this.todosChange.emit(this.todos);
  }

}
