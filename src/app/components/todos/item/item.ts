import { Component, input } from '@angular/core';
import { Todo } from '../../../model/todo.type';
import { HighlightCompletedTodo } from '../../../directives/highlight-completed-todo';

@Component({
  selector: 'app-item',
  imports: [HighlightCompletedTodo],
  templateUrl: './item.html',
  styleUrl: './item.scss',
})
export class Item {
  todo = input.required<Todo>();
}
