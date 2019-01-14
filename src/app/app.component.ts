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
  addToDo() {
    console.log(this.newToDo);
    this.todos.push(this.newToDo);
    this.newToDo = '';
  }
}
