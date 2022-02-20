import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      // {
      //   title: 'test 1',
      //   desc: 'lorem desc',
      //   active: true,
      // },
      // {
      //   title: 'test 2',
      //   desc: 'lorem desc',
      //   active: true,
      // },
    ];
  }

  ngOnInit(): void {}
  deleteTodo(todoData: Todo) {
    const index = this.todos.indexOf(todoData);
    if (this.todos.indexOf(todoData) !== -1) {
      this.todos.splice(index, 1);
    }
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
