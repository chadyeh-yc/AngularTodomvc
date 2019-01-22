import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];

  @Input() filterCondition: string;

  @Output() todosChange = new EventEmitter<Todo[]>();

  constructor() { }

  ngOnInit() {
  }

  toggleAllComplete() {
    this.todos.forEach(item => item.isCompleted = true);
    this.todosChange.emit(this.todos);
    // this.todos = this.todos.map(todo => ({ ...todo, isCompleted: true }));
  }

}
