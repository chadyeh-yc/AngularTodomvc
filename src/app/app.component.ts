import { Component } from '@angular/core';

interface Todo {
  id: number;
  item: string;
  isCompleted: boolean;
  isEditing: boolean;
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

  todos: Todo[] = [
    {
      id: 1,
      item: 'todo 1',
      isCompleted: false,
      isEditing: false
    },
    {
      id: 2,
      item: 'todo 2',
      isCompleted: true,
      isEditing: false
    },
    {
      id: 3,
      item: 'todo 3',
      isCompleted: false,
      isEditing: false
    }
  ];

  maxId = 0;
  addToDo() {
    console.log(this.newToDo);
    this.todos.push({
      id: ++this.maxId,
      item: this.newToDo,
      isCompleted: false,
      isEditing: false
    });
    this.newToDo = '';
  }

  removeToDo(idx: number) {
    this.todos.splice(idx, 1);
  }

  toggleComplete(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  toggleAllComplete() {
    this.todos.forEach(item => item.isCompleted = true);
    // this.todos = this.todos.map(todo => ({ ...todo, isCompleted: true }));
  }

  get uncompletedCount() {
    return this.todos.filter(item => item.isCompleted === false).length;
  }

  clearCompletes() {
    this.todos = this.todos.filter(item => item.isCompleted === false);
  }
}
