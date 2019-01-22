import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

export interface Todo {
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

  maxId: number = this.todos.length;

  filterCondition = 'all';

  addToDo(newToDo: string) {
    console.log(newToDo);
    this.todos.push({
      id: ++this.maxId,
      item: newToDo,
      isCompleted: false,
      isEditing: false
    });
  }

  removeToDo(idx: number) {
    this.todos.splice(idx, 1);
  }

  toggleComplete(todo: Todo) {
    this.todos = this.todos.map(_todo => {
      if (_todo.id === todo.id) {
        _todo.isCompleted = !_todo.isCompleted;
      }
      return _todo;
    });
    // todo.isCompleted = !todo.isCompleted;
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
