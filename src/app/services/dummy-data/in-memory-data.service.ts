import { InMemoryDbService } from 'angular-in-memory-web-api';
import {ProjectStatusEnum} from '../../dto/project-status.enum';
import {TaskStatusEnum} from '../../dto/task-status.enum';
import {UserStatusEnum} from "../../dto/user-status.enum";
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      {  id: 1
        , description: 'Project 1'
        , status: ProjectStatusEnum.PENDING
        , created: '2017-04-01T10:45:54Z'
        , modified: '2017-04-01T10:45:54Z'
        , beginDate: '2017-04-07'
        , dueDate: '2017-04-25'
      }
      ,{  id: 2
        , description: 'Project 2'
        , status: ProjectStatusEnum.IN_PROGRESS
        , created: '2017-03-01T10:45:54Z'
        , modified: '2017-04-05T10:45:54Z'
        , beginDate: '2017-03-15'
        , dueDate: '2017-04-15'
      }
    ];

    const tasks = [
      {   id: 1
        , projectId: 1
        , parentId: 0
        , description: 'Tarea 1'
        , status: TaskStatusEnum.PENDING
        , created: '2017-04-01T10:45:54Z'
        , modified: '2017-04-01T10:45:54Z'
        , beginDate: '2017-04-07'
        , dueDate: '2017-04-08'
      },
      {  id: 2
        , projectId: 1
        , parentId: 1
        , description: 'Tarea 2'
        , status: TaskStatusEnum.PENDING
        , created: '2017-04-01T10:45:54Z'
        , modified: '2017-04-01T10:45:54Z'
        , beginDate: '2017-04-08'
        , dueDate: '2017-04-012'
      },
      {  id: 3
        , projectId: 1
        , parentId: 2
        , description: 'Tarea 3'
        , status: TaskStatusEnum.PENDING
        , created: '2017-04-01T10:45:54Z'
        , modified: '2017-04-01T10:45:54Z'
        , beginDate: '2017-04-13'
        , endDate: '2017-04-25'
      },
      {   id: 4
        , projectId: 2
        , parentId: 0
        , description: 'Tarea 4'
        , status: TaskStatusEnum.COMPLETED
        , created: '2017-03-01T10:45:54Z'
        , modified: '2017-03-01T10:45:54Z'
        , beginDate: '2017-03-16'
        , dueDate: '2017-03-19'
      },
      {  id: 5
        , projectId: 2
        , parentId: 4
        , description: 'Tarea 5'
        , status: TaskStatusEnum.IN_PROGRESS
        , created: '2017-03-01T10:45:54Z'
        , modified: '2017-03-01T10:45:54Z'
        , beginDate: '2017-03-20'
        , dueDate: '2017-04-03'
      },
      {  id: 6
        , projectId: 2
        , parentId: 5
        , description: 'Tarea 6'
        , status: TaskStatusEnum.PENDING
        , created: '2017-03-01T10:45:54Z'
        , modified: '2017-03-01T10:45:54Z'
        , beginDate: '2017-04-4'
        , dueDate: '2017-04-14'
      }
    ];
    const users = [
      {
        id: 1
        ,username: 'nathanielc_g'
        ,password: 'nathanielc_g'
        ,status: UserStatusEnum.ACTIVE
        ,name: "Nathaniel Calderon"
        ,email: "nathaniel.calderon@gmail.comn"
      },
      {
        id: 2
        ,username: 'jansel'
        ,password: 'jansel'
        ,status: UserStatusEnum.INACTIVE
        ,name: "Jansel"
        ,email: "jansel@gmail.comn"
      },
      {
        id: 3
        ,username: 'test'
        ,password: 'test'
        ,status: UserStatusEnum.ACTIVE
        ,name: "test"
        ,email: "test@gmail.comn"
      }

    ];
    return {projects, tasks, users};
  }
}
