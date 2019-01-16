import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], condition?: string): any {

    // show all
    if (condition === 'all') {
      return todos;
    }
    // TODO: show active (not complete) isCompleted
    if (condition === 'notComplete') {
      return todos.filter(item => item.isCompleted === false);
    }
    // TODO: show completed isCompleted
    if (condition === 'complete') {
      return todos.filter(item => item.isCompleted === true);
    }
    return todos;
  }
}
