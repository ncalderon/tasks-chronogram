import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing/app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from '../services/dummy-data/in-memory-data.service';


import { AppComponent } from './app.component';
import { ProgressStepsComponent } from '../components/progress-steps/progress-steps.component';
import { TaskComponent } from '../components/task/task.component';
import { ProjectComponent } from '../components/project/project.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ProjectSearchComponent } from '../components/project-search/project-search.component';
import {ProjectService} from '../services/project/project.service';
import {TaskService} from '../services/task/task.service';



@NgModule({
  declarations: [
    AppComponent,
    ProgressStepsComponent,
    TaskComponent,
    ProjectComponent,
    DashboardComponent,
    ProjectSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [ProjectService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
