import {ProjectStatus} from "./project-status.enum";
import {Task} from "./task";
export class Project {
  id: number;
  description: string;
  status: ProjectStatus;
  created: string;
  modified: string;
  beginDate: string;
  dueDate: string;
}
