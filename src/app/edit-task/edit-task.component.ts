import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TaskService } from "../task.service";
import { FlashMessagesService } from "angular2-flash-messages";

import { Task } from "../task";

@Component({
  selector: "app-edit-task",
  templateUrl: "./edit-task.component.html",
  styleUrls: ["./edit-task.component.css"]
})
export class EditTaskComponent implements OnInit {
  task_id: number = 0;
  task: String = "";
  parent: String = "";
  priority: number = 0;
  start_date: String = "";
  end_date: String = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.taskService.getTask(id).subscribe(response => {
      this.task = response.data[0].task;
      this.task_id = id;
      this.parent = response.data[0].parent;
      this.priority = response.data[0].priority;
      this.start_date = response.data[0].start_date.substring(0, 10);
      this.end_date = response.data[0].end_date.substring(0, 10);
    });
  }

  onCancel() {
    this.router.navigate(["/tasks"]);
  }

  onTaskUpdate() {
    const updatedTask = {
      task: this.task,
      parent: this.parent,
      priority: this.priority,
      start_date: this.start_date,
      end_date: this.end_date
    };
    if (!this.taskService.validateTask(updatedTask)) {
      this.flashMessage.show("Fill in all mandatory details", {
        cssClass: "alert-danger",
        timeout: 3000
      });
    } else {
      this.taskService.updateTask(this.task_id, updatedTask).subscribe(data => {
        this.flashMessage.show("Task Updated Successfully", {
          cssClass: "alert-success",
          timeout: 3000
        });
        this.router.navigate(["/tasks"]);
      });
    }
  }
}
