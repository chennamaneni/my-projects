/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map'

@Injectable()
export class toDoListService {
    
    constructor( private http: Http) {}
    
    getAllTasks() {
        return this.http.get('http://127.0.0.1:9292/tasks')
           // Call map on the response observable to get the parsed json
               .map(res => res.json())

    //return this.http.post(''path);
    //return ["work", "workFromHome"];
//        return ["work", "workFromHome"];
    }
    
    addTask(taskInput: string) {
        var params = JSON.stringify({"name": taskInput, "addedOn":new Date().toJSON().slice(0,10)})
        return this.http.post('http://127.0.0.1:9292/tasks', params)
            .map(res => res.json())
               
    }
}
