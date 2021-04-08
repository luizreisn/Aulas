import { Component } from '@angular/core';

  interface Task{
    name: string;
    done: boolean;
  }
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tasks: Task[]= []
  public newTaskName = '';
  public progress = 0;

  constructor() {}

  public addNewTask(){
    if(this.newTaskName.trim().length == 0)
    this.tasks.push({
      name: this.newTaskName.trim(),
      done: false
    })
    this.newTaskName = '';
    this.calculateProgress();
  }

  public calculateProgress(){
    //let completedTasks = 0;
    //for(let task of this.tasks){
    //  if(task){
    //    completedTasks++;
    //  }
    //}
    //this.progress = completedTasks / this.tasks.length;
  
    this.progress = this.tasks.filter(function(t){
      return t.done;
    }).length / this.tasks.length
  } 

  public removeTask(toRemove: Task){
    const index = this.tasks.findIndex(t => t == toRemove)
  }

}
