import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Task} from '../../dto/task';
import {system} from '../../shared/system';

@Injectable()
export class TaskService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private tasksUrl = `${system.getBaseApiURL()}/tasks`;  // URL to web api
  constructor(private http: Http) { }

  getTasks(): Promise<Task[]> {
    return this.http.get(this.tasksUrl)
      .toPromise()
      .then(response => response.json().data as Task[])
      .catch(this.handleError);
  }

  getTasksByProjectId(projectId: number): Promise<Task[]> {
    const url = `${this.tasksUrl}/?projectId=${projectId}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Task[])
      .catch(this.handleError);
  }

  getTasksByParentId(parentId: number): Promise<Task[]> {
    const url = `${this.tasksUrl}/?parentId=${parentId}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Task[])
      .catch(this.handleError);
  }

  getTask(id: number): Promise<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Task)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(task: Task): Promise<Task> {
    return this.http
      .post(this.tasksUrl, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Task)
      .catch(this.handleError);
  }

  update(task: Task): Promise<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http
      .put(url, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
