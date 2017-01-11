System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var toDoListService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            toDoListService = (function () {
                function toDoListService(http) {
                    this.http = http;
                }
                toDoListService.prototype.getAllTasks = function () {
                    return this.http.get('http://127.0.0.1:9292/tasks')
                        .map(function (res) { return res.json(); });
                    //return this.http.post(''path);
                    //return ["work", "workFromHome"];
                    //        return ["work", "workFromHome"];
                };
                toDoListService.prototype.addTask = function (taskInput) {
                    var params = JSON.stringify({ "name": taskInput, "addedOn": new Date().toJSON().slice(0, 10) });
                    return this.http.post('http://127.0.0.1:9292/tasks', params)
                        .map(function (res) { return res.json(); });
                };
                toDoListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], toDoListService);
                return toDoListService;
            }());
            exports_1("toDoListService", toDoListService);
        }
    }
});
//# sourceMappingURL=toDoList.service.js.map