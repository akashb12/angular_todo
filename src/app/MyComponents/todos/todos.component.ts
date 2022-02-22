import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {
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
  getTodosData() {
    this.todoService.getTodos().subscribe((res: any) => {
      console.log('data', res?.get);
      this.todos = res.get;
    });
  }

  ngOnInit(): void {
    this.getTodosData();
  }
  deleteTodo(todoData: Todo) {
    // console.log(todoData);
    this.todoService.deleteTodo(todoData.id).subscribe((res) => {
      const index = this.todos.indexOf(todoData);
      if (this.todos.indexOf(todoData) !== -1) {
        this.todos.splice(index, 1);
      }
    });
    // const index = this.todos.indexOf(todoData);
    // if (this.todos.indexOf(todoData) !== -1) {
    //   this.todos.splice(index, 1);
    // }
  }
  addTodo(todo: Todo) {
    // this.todos.push(todo);
    this.todoService.addTodo(todo).subscribe((res: any) => {
      console.log('data', res);
      this.todos.push(res.create);
    });
  }
}
