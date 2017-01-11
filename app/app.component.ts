import {Component} from 'angular2/core';
import {toDoListComponent} from './toDoList.component';

@Component({
    selector: 'my-app',
    template: '<center><h1>Angular with nodeJS</h1><toDoList></toDoList><allTasks></allTasks>',
    directives: [toDoListComponent]
    
})
export class AppComponent { }