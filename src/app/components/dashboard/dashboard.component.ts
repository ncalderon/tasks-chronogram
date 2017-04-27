import { Component, OnInit } from '@angular/core';
import {Project} from '../../dto/project';
import {ProjectService} from '../../services/project/project.service';
import {ProjectStatusEnum} from '../../dto/project-status.enum';
import {ViewState} from '../../dto/view-state.enum';
import {User} from "../../dto/user";
import {session} from "../../shared/session";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userLogged: User;
  project: Project;
  projects: Project[];
  viewState: ViewState;
  createState: ViewState = ViewState.CREATE;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.userLogged = session.getUserLogged();
    this.getProjects();

  }

  getProjects(): void {
    this.projectService.getProjects(this.userLogged.id).then( projects => this.projects = projects);
  }

  createNewProject(): void {
    this.viewState = ViewState.CREATE;
    this.project = new Project();
    this.project.status = ProjectStatusEnum.PENDING;
    this.project.description = '';
  }

  refreshModel(): void {
    this.getProjects();
  }

  save(project: Project): void {
    this.viewState = null;
    this.project = null;
    this.projectService.create(project).then(taskResponse => this.refreshModel());
  }

}
