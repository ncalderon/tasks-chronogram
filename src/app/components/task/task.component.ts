;import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TaskStatus} from '../../dto/task-status.enum';
import {Task} from '../../dto/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnChanges {

  @Input() task: Task;
  @Output() onSaveOrUpdate = new EventEmitter<Task>();
  taskStatusArr: TaskStatus;
  constructor() { }

  ngOnInit() {
    /*this.taskStatusArr = new Array(3);
    this.fillTaskStatus();*/
  }

  fillTaskStatus(): void {
    console.log(this.taskStatusArr);
    /*this.taskStatusArr.push(TaskStatus.PENDING);
    this.taskStatusArr.push(TaskStatus.PENDING);
    this.taskStatusArr.push(TaskStatus.COMPLETED);*/
  }

  saveOrUpdate(task: Task): void {
    /*console.log(this.task);*/
    this.onSaveOrUpdate.emit(task);
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    /*console.log(changes);
    if (changes['data']) {

    }*/
  }

  get diagnosticModel(): any { return JSON.stringify(this.task); }



}
