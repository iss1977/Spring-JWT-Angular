import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { API_URL } from 'src/app/app.constants'; // this was the old URL. Not used anymore.
import { TODO_JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   *
   * Retrieve all todos from Backend
   * */
  retrieveAllTodos(username): any {
    return (this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`))
  }

  /**
   *
   * Send a DELETE request to the backend.
   *
   * */
  deleteTodo(username: string, id: number){

    return (this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`))
  }

  retrieveTodo(username: string, id: number): Observable<Todo> {
    return (this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`))
  }

  updateTodo(username: string, id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo)
  }

  createTodo(username: string, todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos`, todo)
  }

}
