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

  getTask(id): any {
    let url = this.getTaskUrl + "/" + id;
    console.log(url);
    return this.http.get(url);
  }

  getTasks() {
    return this.http.get(this.getTaskUrl);
  }

  updateTask(task_id: number, updatedTask: Task): Observable<Task> {
    let updateUrl = this.getTaskUrl + "/" + task_id;
    console.log(updateUrl);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.put<Task>(updateUrl, updatedTask, httpOptions);
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
