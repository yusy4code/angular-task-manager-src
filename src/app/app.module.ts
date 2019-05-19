import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ViewTasksComponent } from "./view-tasks/view-tasks.component";
import { AddTaskComponent } from "./add-task/add-task.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ViewTasksComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "tasks/add",
        component: AddTaskComponent
      },
      {
        path: "tasks",
        component: ViewTasksComponent
      },
      {
        path: "welcome",
        component: WelcomeComponent
      },
      {
        path: "",
        redirectTo: "welcome",
        pathMatch: "full"
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
