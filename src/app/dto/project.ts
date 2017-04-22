import {ProjectStatusEnum} from './project-status.enum';

export class Project {
  id: number;
  userId: number;
  description: string;
  status: ProjectStatusEnum;
  created: string;
  modified: string;
  beginDate: string;
  dueDate: string;
}
