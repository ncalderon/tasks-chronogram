import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import {Project} from '../../../dto/project';
import {Task} from '../../../dto/task';
import {TaskService} from '../../../services/task/task.service';
import {ProjectService} from '../../../services/project/project.service';

import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import {TaskStatusEnum} from '../../../dto/task-status.enum';
import {ViewState} from '../../../dto/view-state.enum';
import {User} from "../../../dto/user";
import {session} from "../../../shared/session";


@Component({
  selector: 'app-project-edit',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  userLogged: User;
  project: Project;
  tasks: Task[];
  task: Task;
  viewState: ViewState;
  createState: ViewState = ViewState.CREATE;
  editState: ViewState = ViewState.EDIT;

  constructor(
              private projectService: ProjectService
              , private taskService: TaskService
              , private route: ActivatedRoute
              , private location: Location) { }

  ngOnInit() {
    this.userLogged = session.getUserLogged();
    this.route.params
      .switchMap((params: Params) => this.projectService.getProject(+params['id']))
      .subscribe(project => { this.project = project; this.getTasksByProjectId(this.project.id); });
  }

  getTasksByProjectId(projectId: number): void {
    this.taskService
      .getTasksByProjectId(this.project.id)
      .then(tasks => { this.tasks = tasks; console.log(JSON.stringify(tasks)); });
  }

  /*orderTasks(): void {
    let tasks: Task[] = [];

  }

  getParent(parentId: number): Task {
    let result = this.tasks.find((task, idx, arr) => {
      return true;
    });
  }*/

  createNewTask(): void {
    this.viewState = ViewState.CREATE;
    this.task = new Task();
    this.task.projectId = this.project.id;
    this.task.description = '';
    this.task.status = TaskStatusEnum.PENDING;
    this.task.parentId = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id : 0;
    console.log(this.task);
  }

  goBack(): void {
    this.location.back();
  }

  refreshModel(): void {
    this.projectService.getProject(this.project.id).then(project => {this.project = project; this.getTasksByProjectId(this.project.id); });
  }

  save(task: Task): void {
    /*console.log(task);*/
    this.viewState = null;
    this.task = null;
    this.taskService.create(task).then(taskResponse => this.refreshModel());
  }

  update(task: Task): void {
    this.viewState = null;
    this.task = null;
    this.taskService.update(task).then(taskResponse => this.refreshModel());
  }

  delete(task: Task): void {
    this.viewState = null;
    this.task = null;
    this.taskService.delete(task.id).then(taskResponse => this.refreshModel());
  }

  setEditState(task: Task): void {
    this.viewState = this.editState;
    this.task = task;

  }

}
