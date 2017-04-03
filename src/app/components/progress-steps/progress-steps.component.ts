import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Task} from '../../dto/task';
import {TaskStatus} from '../../dto/task-status.enum';

@Component({
  selector: 'app-progress-steps',
  templateUrl: './progress-steps.component.html',
  styleUrls: ['./progress-steps.component.css']
})
export class ProgressStepsComponent implements OnInit, OnChanges  {

  @Input() tasks: Task[];
  constructor() { }


  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    console.log("steps-progress");
    console.log(changes['tasks']);
    if (changes['tasks']) {
      //this.tasks = this.groupByCategory(this.data);
    }
  }

  getStatusCssClass(task: Task): string {
    let cssClass: string;
    console.log(task.status);
    if (TaskStatus.COMPLETED === task.status) {
      cssClass = 'complete';
    } else if (TaskStatus.IN_PROGRESS === task.status) {
      cssClass = 'active';
    } else {
      cssClass = 'disabled';
    }
    //cssClass += ' col-xs-3 bs-wizard-step';
    return cssClass;
  }

}
