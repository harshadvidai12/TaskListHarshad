import { Component } from '@angular/core';
import { appService } from '../app.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  dataList: any[] = [];
  selectedPriority='high';
  title:String = 'House clean';
  due_Date :String='10 July 2024';
  priority:string='high';
  status:string='completed';
  selectedTask:any='';
  TaskList:any=
[
  {
    "title": "Task 1",
    "dueDate": "26/07/2024",
    "priority": "high",
    "status": "Incompleted"
  },
  {
    "title": "Task 2",
    "dueDate": "26/07/2024",
    "priority": "medium",
    "status": "Incompleted"
  },
  {
    "title": "Task 3",
    "dueDate": "27/07/2024",
    "priority": "low",
    "status": "Completed"
  },
  {
    "title": "Task 4",
    "dueDate": "28/07/2024",
    "priority": "high",
    "status": "Incompleted"
  },
  {
    "title": "Task 5",
    "dueDate": "29/07/2024",
    "priority": "medium",
    "status": "Completed"
  }
];
  constructor(private appServ: appService){
   
  }
  ngOnInIt(){
    this.appServ.dataListUpdated$.subscribe((updatedList: any[]) => {
      debugger
      this.dataList = updatedList;
      console.log(this.dataList);
      
    });
  }
  selectTask(task: any) {
    this.selectedTask = task;
  }
}
