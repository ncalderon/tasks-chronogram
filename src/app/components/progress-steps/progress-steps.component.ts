import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {Task} from '../../dto/task';
import {TaskStatusEnum} from '../../dto/task-status.enum';

@Component({
  selector: 'app-progress-steps',
  templateUrl: './progress-steps.component.html',
  styleUrls: ['./progress-steps.component.css']
})
export class ProgressStepsComponent implements OnInit  {

  @Input() tasks: Task[];
  @Output()onSelectTask = new EventEmitter<Task>();
  constructor() { }


  ngOnInit() {

  }
  /*ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    console.log("steps-progress");
    console.log(changes['tasks']);
    if (changes['tasks']) {
      //this.tasks = this.groupByCategory(this.data);
    }
  }*/

  selectTask(task: Task): void {
    this.onSelectTask.emit(task);
  }

  getStatusCssClass(task: Task): string {
    let cssClass: string;
    //console.log(task.status);
    if (TaskStatusEnum.COMPLETED === task.status) {
      cssClass = 'complete';
    } else if (TaskStatusEnum.IN_PROGRESS === task.status) {
      cssClass = 'active';
    } else {
      cssClass = 'disabled';
    }
    //cssClass += ' col-xs-3 bs-wizard-step';
    return cssClass;
  }

}
