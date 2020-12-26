import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { observable, Observable } from 'rxjs'; 
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Injectable()
export class KanbanHttpService {

  public baseUrl = 'http://localhost:3000/api/v1/task';
  constructor(private _http:HttpClient) { }

  private handleError(err: HttpErrorResponse){
    console.log("handle error http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to get all task
  public getAllTask() : any {
    let myResponse = this._http.get(this.baseUrl+'/all')
    console.log(myResponse)
    return myResponse;
  }

  //method to get task by task id
  public getTaskById(taskId): any {
    let myResponse = this._http.get(this.baseUrl+'/view'+ '/' + taskId);
    return myResponse;
  }

  //method to delete task
  public deleteTask(taskId):any {
    let data = {}
    let myResponse = this._http.post(this.baseUrl+'/'+taskId+'/delete',data)
    return myResponse
  }

  //method to edit task
  public editTask(taskId, taskData):any {
    let myResponse = this._http.put(this.baseUrl+'/'+taskId+'/edit',taskData)
    return myResponse;
  }

  //method to add task
  public addTask(taskData,column) : any {
    console.log("TASK DATA  =  "+taskData)
    const params = {
      taskName : taskData,
      columnName : column
    }

    let myResponse = this._http.post(this.baseUrl+'/addTask',params);
    console.log(myResponse)
    return myResponse;
  }

}