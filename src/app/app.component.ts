import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todomvc';
  newToDoPlaceholder = 'What needs to be done?';

  addToDo(newToDo: { value: string; }) {
    console.log(newToDo.value);
    newToDo.value = '';
  }
}
