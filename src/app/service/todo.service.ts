import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../Todo';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}
  getTodos() {
    return this.httpClient.get('http://localhost:5000/todos/get');
  }
  addTodo(data: Todo) {
    return this.httpClient.post('http://localhost:5000/todos/create', data);
  }
  updateTodo(data: Todo, id: number) {
    return this.httpClient.put(
      `http://localhost:5000/todos/update/${id}`,
      data
    );
  }
  deleteTodo(id: any) {
    return this.httpClient.delete(`http://localhost:5000/todos/delete/${id}`);
  }
}
