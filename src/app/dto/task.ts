import {TaskStatus} from './task-status';
import {TaskStatusEnum} from "./task-status.enum";
export class Task {
  id: number;
  projectId: number;
  userId: number;
  parentId: number;
  description: string;
  status: TaskStatusEnum;
  created: string;
  modified: string;
  beginDate: string;
  dueDate: string;

  // subtasks: Task[];
}
