import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from 'app/dto/project';
import {ProjectStatusEnum} from '../../../dto/project-status.enum';

@Component({
  selector: 'app-project-create',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;
  @Output()onSave = new EventEmitter<Project>();
  projectStatusList: ProjectStatusEnum[] = [ProjectStatusEnum.PENDING, ProjectStatusEnum.IN_PROGRESS, ProjectStatusEnum.COMPLETED];

  constructor() { }

  ngOnInit() {
  }

  getProjectEnumName(projectStatusEnum: ProjectStatusEnum): string {
    return ProjectStatusEnum[projectStatusEnum];
  }

  save (project: Project): void {
    /*console.log(this.task);*/
    console.log('On save new Project: ', project);
    this.onSave.emit(project);
  }
}
