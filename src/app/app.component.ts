import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todomvc';
  newToDoPlaceholder = 'What needs to be done?';

  newToDo = '';

  todos = [];

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
}
