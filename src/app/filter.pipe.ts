import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], condition?: 'all' | 'active' | 'completed'): Todo[] {

    // show all
    if (condition === 'all') {
      return todos;
    }
    // TODO: show active (not complete) isCompleted
    if (condition === 'active') {
      return todos.filter(item => item.isCompleted === false);
    }
    // TODO: show completed isCompleted
    if (condition === 'completed') {
      return todos.filter(item => item.isCompleted === true);
    }
    return todos;
  }
}
