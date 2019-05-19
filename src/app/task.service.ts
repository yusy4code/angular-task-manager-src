import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

import { Task } from "./task";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  url = "https://jsonplaceholder.typicode.com/todos/1";
  getTaskUrl = "http://localhost:3000/tasks";
  taskCreateUrl = "http://localhost:3000/tasks/new";

  constructor(private http: HttpClient) {}

  getTodo() {
    console.log("todo coming");
    return this.http.get(this.url);
  }
  getTasks() {
    return this.http.get(this.getTaskUrl);
  }

  addTask(task: Task): Observable<Task> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post<Task>(this.taskCreateUrl, task, httpOptions);
  }
}
