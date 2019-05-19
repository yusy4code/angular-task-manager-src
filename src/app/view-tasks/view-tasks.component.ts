import { Component, OnInit } from "@angular/core";
import { Task } from "../task";
import { TaskService } from "../task.service";

@Component({
  selector: "app-view-tasks",
  templateUrl: "./view-tasks.component.html",
  styleUrls: ["./view-tasks.component.css"]
})
export class ViewTasksComponent implements OnInit {
  tasks: Task[];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = <any>data;
      console.log(this.tasks);
    });
  }
}
