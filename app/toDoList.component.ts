/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Component} from 'angular2/core' 
import {toDoListService} from './services/toDoList.service'
import {Http} from 'angular2/http'


@Component({ 
    selector :'allTasks',
    template : `<h1>To-DO list</h1>\n\
                  <button (click)="onGetAllTasks()">Available tasks</button>
                \n\
                 <div *ngFor='#task of tasks'>{{ task.name }} created on {{task.addedOn}}</div>\n
                 <br>
                 <p><input type="text" name="item" [(ngModel)]="inputTask" /></p>
                 <p><input (click)="onAddTask(inputTask)" type="submit" value="Add Task" /></p>`,
    providers : [toDoListService]
         
})
 
export class toDoListComponent {
    title = "lists all the tasks";
    tasks: Array<Object>;
    postResponseMessage : string;
    constructor(private httpService: toDoListService){}
    onGetAllTasks() {
        this.httpService.getAllTasks()
             // takes two args
            .subscribe(data => this.tasks = data.anotherArray.tasks,
                       error => alert(error),
                       () => console.log("finished"));
    }
    onAddTask(item: string) {
        console.log(item);
        
        var json = {item};
        this.httpService.addTask(item)
            .subscribe(data => this.postResponseMessage = data,
                       error => alert(error),
                       () => console.log("post call finished"));
    }
  
}