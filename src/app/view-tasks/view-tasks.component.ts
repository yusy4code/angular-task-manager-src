import { Component, OnInit } from "@angular/core";
import { Task } from "../task";
import { TaskService } from "../task.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-view-tasks",
  templateUrl: "./view-tasks.component.html",
  styleUrls: ["./view-tasks.component.css"]
})
export class ViewTasksComponent implements OnInit {
  tasks: Task[];
  filteredTask: Task[];
  _taskFilter: string;

  get taskFilter(): string {
    return this._taskFilter;
  }
  set taskFilter(value: string) {
    this._taskFilter = value;
    this.filteredTask = this.taskFilter
      ? this.performTaskFilter(this.taskFilter)
      : this.tasks;
  }
  performTaskFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.tasks.filter((singletask: Task) => {
      return singletask.task.toLocaleLowerCase().indexOf(filterBy) !== -1;
    });
  }

  constructor(
    private taskService: TaskService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = <any>data;
      this.filteredTask = this.tasks;
    });
  }

  onTaskEnd(id) {
    console.log(id);
    this.taskService.endTask(id).subscribe(data => {
      console.log(data);
      this.flashMessage.show("Task Ended Successfully", {
        cssClass: "alert-success",
        timeout: 3000
      });
      this.ngOnInit();
    });
  }
}
