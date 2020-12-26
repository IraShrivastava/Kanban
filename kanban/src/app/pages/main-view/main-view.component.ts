import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { KanbanHttpService } from './../../kanban-http.service'

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  public newTodoTask: boolean
  public newInprgTask: boolean
  public newDoneTask: boolean
  public newPendingTask: boolean
  public todoTaskName: string
  public inprgTaskName: string
  public doneTaskName: string
  public pendingTaskName: string
  public boardName: string
  //public newBoardName: boolean = true;

  //public oldTask: boolean
  //public taskCardClicked: boolean = false;
  //public selectedTask: string
  constructor(public KanbanHttpService: KanbanHttpService) { }

  ngOnInit(){
    console.log("main view component")
  }

  todo = [];

  inprogress = [];

  done = [];

  pending = [];

  
  public createTask: any = (columnName:string) =>{
    if(columnName == "todo")
    {
      if(this.newTodoTask)
        this.newTodoTask = false;
      else
        this.newTodoTask = true;
    }
    if(columnName == "inprogress")
    {
      if(this.newInprgTask)
        this.newInprgTask = false;
      else
        this.newInprgTask = true;
    }
    if(columnName == "done")
    {
      if(this.newDoneTask)
        this.newDoneTask = false;
      else
        this.newDoneTask = true;
    }
    if(columnName == "pending")
    {
      if(this.newPendingTask)
        this.newPendingTask = false;
      else
        this.newPendingTask = true;
    }
    
  }

  public showTask: any = (columnName:string) =>{
    if(columnName == 'todo')
    {
      this.todo.push(this.todoTaskName)
      this.newTodoTask = false;
      this.todoTaskName = ""
    }
    if(columnName == 'inprogress')
    {
      this.inprogress.push(this.inprgTaskName)
      this.newInprgTask = false;
      this.inprgTaskName = ""
    }
    if(columnName == 'done')
    {
      this.done.push(this.doneTaskName)
      this.newDoneTask = false;
      this.doneTaskName = ""
    }
    if(columnName == 'pending')
    {
      this.pending.push(this.pendingTaskName)
      this.newPendingTask = false;
      this.pendingTaskName = ""
    }
    
  }

  public addTask: any = (columnName:string) => {

    let taskColumn: string;
    let taskName: string;

    if(columnName === 'todo')
    {
        taskColumn = 'todo';
        taskName = this.todoTaskName;
    }
    else if(columnName === 'inprogress')
    {
        taskColumn = 'inprogress';
        taskName = this.inprgTaskName;
    }
    else if(columnName === 'done')
    {
        taskColumn = 'done';
        taskName = this.doneTaskName;
    }
    else{
        taskColumn = 'pending';
        taskName = this.pendingTaskName;
    }

    this.KanbanHttpService.addTask(taskName,taskColumn).subscribe(
      data => { 
        console.log("data")
        console.log(data.data)
        if(columnName === 'todo')
        {
          this.todo.push(data.data)
          this.newTodoTask = false;
          this.todoTaskName = ""
        }
        else if(columnName === 'inprogress')
        {
          this.inprogress.push(data.data)
          this.newInprgTask = false;
          this.inprgTaskName = ""
        }
        else if(columnName === 'done')
        {
          this.done.push(data.data)
          this.newDoneTask = false;
          this.doneTaskName = ""
        }
        else{
          this.pending.push(data.data)
          this.newPendingTask = false;
          this.pendingTaskName = ""  
        }
        
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    )

  }
  public addTodoTask: any = () => {
    console.log("task name "+ this.todoTaskName)
    let columnName : string = 'todo'
    this.KanbanHttpService.addTask(this.todoTaskName,columnName).subscribe(
      data => { 
        console.log("data")
        console.log(data.data)
        this.todo.push(data.data)
        this.newTodoTask = false;
        this.todoTaskName = ""
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  public addInprogressTask: any = () => {
    console.log("task name "+ this.inprgTaskName)
    let columnName : string = 'inprogress'
    this.KanbanHttpService.addTask(this.inprgTaskName,columnName).subscribe(
      data => { 
        console.log("data")
        console.log(data.data)
        this.inprogress.push(data.data)
        this.newInprgTask = false;
        this.inprgTaskName = ""
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  public addDoneTask: any = () => {
    console.log("task name "+ this.doneTaskName)
    let columnName : string = 'done'
    this.KanbanHttpService.addTask(this.doneTaskName,columnName).subscribe(
      data => { 
        console.log("data")
        console.log(data.data)
        this.done.push(data.data)
        this.newDoneTask = false;
        this.doneTaskName = ""
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  public addPendingTask: any = () => {
    console.log("task name "+ this.pendingTaskName)
    let columnName : string = 'pending'
    this.KanbanHttpService.addTask(this.pendingTaskName,columnName).subscribe(
      data => { 
        console.log("data")
        console.log(data.data)
        this.pending.push(data.data)
        this.newPendingTask = false;
        this.pendingTaskName = ""
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  public taskClicked: any= (task) => {
   console.log("task")
   console.log(task)
   
  }

 /* public editTaskName(event, editedTaskName, oldTaskName) {
    // console.log("edit")
    console.log("New Task  "+editedTaskName)
    console.log("Old Task  "+oldTaskName)
  } */

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}
