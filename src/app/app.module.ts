import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { FlashMessagesModule } from "angular2-flash-messages";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ViewTasksComponent } from "./view-tasks/view-tasks.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ViewTasksComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "tasks/add",
        component: AddTaskComponent
      },{
        path:"tasks/:id",
        component: EditTaskComponent
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
