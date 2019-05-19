import { Component, OnInit } from "@angular/core";
import { TaskService } from "../task.service";
import { Router } from "@angular/router";
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

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {}

  onTaskSubmit() {
    const newTask = {
      task: this.task,
      parent: this.parent,
      priority: this.priority,
      start_date: this.start_date,
      end_date: this.end_date
    };
    console.log(newTask);
    this.taskService.addTask(newTask).subscribe(data => {
      console.log(data);
      this.router.navigate(["/tasks"]);
    });
  }
}
