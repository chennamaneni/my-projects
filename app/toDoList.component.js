System.register(['angular2/core', './services/toDoList.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, toDoList_service_1;
    var toDoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (toDoList_service_1_1) {
                toDoList_service_1 = toDoList_service_1_1;
            }],
        execute: function() {
            toDoListComponent = (function () {
                function toDoListComponent(httpService) {
                    this.httpService = httpService;
                    this.title = "lists all the tasks";
                }
                toDoListComponent.prototype.onGetAllTasks = function () {
                    var _this = this;
                    this.httpService.getAllTasks()
                        .subscribe(function (data) { return _this.tasks = data.anotherArray.tasks; }, function (error) { return alert(error); }, function () { return console.log("finished"); });
                };
                toDoListComponent.prototype.onAddTask = function (item) {
                    var _this = this;
                    console.log(item);
                    var json = { item: item };
                    this.httpService.addTask(item)
                        .subscribe(function (data) { return _this.postResponseMessage = data; }, function (error) { return alert(error); }, function () { return console.log("post call finished"); });
                };
                toDoListComponent = __decorate([
                    core_1.Component({
                        selector: 'allTasks',
                        template: "<h1>To-DO list</h1>\n                  <button (click)=\"onGetAllTasks()\">Available tasks</button>\n                \n                 <div *ngFor='#task of tasks'>{{ task.name }} created on {{task.addedOn}}</div>\n\n                 <br>\n                 <p><input type=\"text\" name=\"item\" [(ngModel)]=\"inputTask\" /></p>\n                 <p><input (click)=\"onAddTask(inputTask)\" type=\"submit\" value=\"Add Task\" /></p>",
                        providers: [toDoList_service_1.toDoListService]
                    }), 
                    __metadata('design:paramtypes', [toDoList_service_1.toDoListService])
                ], toDoListComponent);
                return toDoListComponent;
            }());
            exports_1("toDoListComponent", toDoListComponent);
        }
    }
});
//# sourceMappingURL=toDoList.component.js.map