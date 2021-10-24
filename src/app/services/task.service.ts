import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Task} from '../Task'
import {Observable} from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl_Tasks = 'http://localhost:5000/tasks'
  // injected httpClient
  constructor(private http: HttpClient) { }
  // CRUD controllers
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl_Tasks);
  }
  deleteTask(task:Task): Observable<Task> {
    const url = `${this.apiUrl_Tasks}/${task.id}`
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task:Task):Observable<Task>{
    const url = `${this.apiUrl_Tasks}/${task.id}`
    return this.http.put<Task>(url,task,httpOptions);
  }
}
