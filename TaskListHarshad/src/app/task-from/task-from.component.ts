import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { appService } from '../app.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-task-from',
  templateUrl: './task-from.component.html',
  styleUrls: ['./task-from.component.scss']
})
export class TaskFromComponent {
  taskForm!: FormGroup;
  // subscription: Subscription;
  myDataArray: any[] = []; 
  constructor(private fb: FormBuilder, private appServ: appService){
    this.taskForm = this.fb.group({
      title:[''],
      status:['null'],
      priority:['null'],
      dueDate:['']
    });
    
  
    
  }
  ngOnInIt(){

  }
  onSubmit() {
    const formData = this.taskForm.value;
    this.myDataArray.push(formData);
    console.log(this.myDataArray);
    this.appServ.updateData(this.myDataArray);
    this.clearform();
  }
  clearform(){
    // this.taskForm.reset();
    this.taskForm.patchValue({
      title: null,
      status:null,
      priority:null,
      dueDate:null
    });
  }

}
