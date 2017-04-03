import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import {Project} from '../../dto/project';
import {Task} from '../../dto/task';
import {TaskService} from '../../services/task/task.service';
import {ProjectService} from '../../services/project/project.service';

import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import {TaskStatus} from '../../dto/task-status.enum';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project;
  tasks: Task[];
  task: Task;
  constructor(
              private projectService: ProjectService
              , private taskService: TaskService
              , private route: ActivatedRoute
              , private location: Location) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.projectService.getProject(+params['id']))
      .subscribe(project => { this.project = project; this.getTasksByProjectId(this.project.id); });
  }

  getProjectById () {

  }

  getTasksByProjectId(projectId: number): void {
    this.taskService
      .getTasksByProjectId(this.project.id)
      .then(tasks => { this.tasks = tasks; console.log(tasks); this.createDefaultTask(); });
  }

  createDefaultTask(): void {
    this.task = new Task();
    this.task.id = 0;
    this.task.projectId = this.project.id;
    this.task.description = '';
    this.task.status = TaskStatus.PENDING;
    this.task.parentId = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id : 0;
  }

  goBack(): void {
    this.location.back();
  }

  refreshModel(): void {
    this.projectService.getProject(this.project.id).then(project => {this.project = project; this.getTasksByProjectId(this.project.id); });
  }

  saveOrUpdate(): void {
    this.onSaveOrUpdate(this.task);
  }

  onSaveOrUpdate(task: Task): void {
    /*console.log(task);*/
    if (task.id === 0)
      this.taskService.create(task).then(taskResponse => this.refreshModel());
    else
      this.taskService.update(task).then(taskResponse => this.refreshModel());
  }




}
