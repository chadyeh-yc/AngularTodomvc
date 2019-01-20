import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  @Input() newToDoPlaceholder: string;

  // tslint:disable-next-line:no-output-rename
  @Output('addToDo') addToDoEmitter = new EventEmitter<string>();

  newToDo = '';
  constructor() { }

  ngOnInit() {
  }

  addToDo() {
    this.addToDoEmitter.emit(this.newToDo);
    this.newToDo = '';
  }
}
