import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/dummy-data/in-memory-data.service';


import { AppComponent } from './app.component';
import { ProgressStepsComponent } from './components/progress-steps/progress-steps.component';
import { TaskComponent } from './components/task/create/task.component';
import { TaskComponent as TaskEditComponent } from './components/task/edit/task.component';
import { ProjectComponent } from './components/project/create/project.component';
import { ProjectComponent as ProjectEditComponent } from './components/project/edit/project.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectSearchComponent } from './components/project-search/project-search.component';
import {ProjectService} from './services/project/project.service';
import {TaskService} from './services/task/task.service';
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from "./components/login/guard/auth-guard";
import {UserService} from "./services/user/user.service";
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    AppComponent,
    ProgressStepsComponent,
    TaskComponent,
    TaskEditComponent,
    ProjectComponent,
    ProjectEditComponent,
    DashboardComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [AuthGuard, UserService, ProjectService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
