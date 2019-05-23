import { Component, OnInit } from "@angular/core";
import { TaskService } from "../task.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { Task } from "../task";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"]
})
export class AddTaskComponent implements OnInit {
  task: String;
  parent: String;
  priority: number;
  start_date: String;
  end_date: String;
  is_completed: boolean = false;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {}

  onReset() {
    this.task = "";
    this.parent = "";
    this.priority = 0;
    this.start_date = "";
    this.end_date = "";
  }
  onTaskSubmit() {
    const newTask = {
      task: this.task,
      parent: this.parent,
      priority: this.priority,
      start_date: this.start_date,
      end_date: this.end_date,
      is_completed: this.is_completed
    };
    if (!this.taskService.validateTask(newTask)) {
      this.flashMessage.show("Fill in all mandatory details", {
        cssClass: "alert-danger",
        timeout: 3000
      });
    } else {
      this.taskService.addTask(newTask).subscribe(data => {
        this.flashMessage.show("Task Created Successfully", {
          cssClass: "alert-success",
          timeout: 3000
        });
        this.router.navigate(["/tasks"]);
      });
    }
  }
}
