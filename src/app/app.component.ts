import { Component } from '@angular/core';

interface Todo {
  id: number;
  item: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todomvc';
  newToDoPlaceholder = 'What needs to be done?';

  newToDo = '';

  todos: Todo[] = [];

  maxId = 0;
  addToDo() {
    console.log(this.newToDo);
    this.todos.push({
      id: ++this.maxId,
      item: this.newToDo,
      isCompleted: false
    });
    this.newToDo = '';
  }
  toggleComplete(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }
}
