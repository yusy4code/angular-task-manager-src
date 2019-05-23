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
  constructor(
    private taskService: TaskService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = <any>data;
      console.log(this.tasks);
    });
  }

  onTaskEnd(id) {
    console.log(id);
    this.taskService.endTask(id).subscribe(data => {
      console.log(data);
      this.flashMessage.show("Task Updated Successfully", {
        cssClass: "alert-success",
        timeout: 3000
      });
      this.ngOnInit();
    });
  }
}
