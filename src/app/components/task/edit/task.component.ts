import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskStatusEnum} from '../../../dto/task-status.enum';
import {Task} from '../../../dto/task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() tasks: Task[];
  @Output() onUpdate = new EventEmitter<Task>();
  @Output() onDelete = new EventEmitter<Task>();
  taskStatusList: TaskStatusEnum[] = [TaskStatusEnum.PENDING, TaskStatusEnum.IN_PROGRESS, TaskStatusEnum.COMPLETED];

  constructor() { }

  ngOnInit() {

  }

  getTaskEnumName(taskStatusEnum: TaskStatusEnum): string {
    return TaskStatusEnum[taskStatusEnum];
  }

  update (task: Task): void {
    /*console.log(this.task);*/
    console.log('On update a new task: ', task);
    this.onUpdate.emit(task);
  }

  delete(task: Task): void {
    console.log('On delete a new task: ', task);
    this.onDelete.emit(task);
  }
}
