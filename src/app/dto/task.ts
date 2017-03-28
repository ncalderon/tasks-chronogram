import {TaskStatus} from "./task-status.enum";
export class Task {
  id: number;
  projectId: number;
  parentId: number;
  description: string;
  status: TaskStatus;
  created: string;
  modified: string;
  beginDate: string;
  dueDate: string;
  //subtasks: Task[];
}
