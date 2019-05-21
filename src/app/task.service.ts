import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

import { Task } from "./task";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  getTaskUrl = "http://localhost:3000/tasks";
  taskCreateUrl = "http://localhost:3000/tasks/new";

  constructor(private http: HttpClient) {}

  validateTask(task) {
    if (
      task.task == undefined ||
      task.priority == undefined ||
      task.start_date == undefined ||
      task.end_date == undefined
    ) {
      return false;
    } else {
      return true;
    }
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
