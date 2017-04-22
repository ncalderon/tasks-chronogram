import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskStatusEnum} from '../../../dto/task-status.enum';
import {Task} from '../../../dto/task';

@Component({
  selector: 'app-task-create',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() tasks: Task[];
  @Output()onSave = new EventEmitter<Task>();
  active = true;
  taskStatusList: TaskStatusEnum[] = [TaskStatusEnum.PENDING, TaskStatusEnum.IN_PROGRESS, TaskStatusEnum.COMPLETED];

  constructor() { }

  ngOnInit() {

  }

  getTaskEnumName(taskStatusEnum: TaskStatusEnum): string {
    return TaskStatusEnum[taskStatusEnum];
  }

  save (task: Task): void {
    /*console.log(this.task);*/
    this.active = false;
    console.log('On save a new task: ', task);
    this.onSave.emit(task);
  }


}
