"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_service_1 = require("../app.service");
var router_1 = require("@angular/router");
var createTaskComponent = (function () {
    function createTaskComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.pri = "highs";
        this.isSucess = false;
        this.isUpdated = false;
        this.btnName = "CreateTask";
        this.isSave = false;
        this.temid = 0;
        this.idToUpdate = "";
    }
    createTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (paraEvent) {
            if (typeof paraEvent.id != 'undefined') {
                _this.service.getItems().subscribe(function (data) {
                    var toEditItem = data.filter(function (x) { return x._id == paraEvent.id; });
                    _this.title = toEditItem[0].title;
                    _this.date = toEditItem[0].date;
                    _this.des = toEditItem[0].description;
                    _this.pri = toEditItem[0].priority;
                    _this.idToUpdate = paraEvent.id;
                    _this.btnName = "Save";
                    _this.isSave = true;
                }, function (err) { return console.error(err); }, function () {
                });
            }
        });
    };
    createTaskComponent.prototype.createTask = function (form) {
        var _this = this;
        if (this.isSave == true) {
            this.service.updateItems(this.title, this.date, this.des, this.pri, this.idToUpdate).subscribe(function (data) {
                _this.isUpdated = true;
            }, function (err) {
                _this.isUpdated = false;
            }, function () {
                _this.isUpdated = true;
            });
            this.btnName = "CreateTask";
            this.isSave = false;
        }
        else {
            this.isUpdated = false;
            this.title = form.title;
            this.date = form.date;
            this.des = form.description;
            this.pri = form.priority;
            this.service.setItems(this.title, this.date, this.des, this.pri).subscribe(function (data) {
                _this.isSucess = true;
            }, function (err) {
                _this.isSucess = false;
            }, function () {
                _this.isSucess = true;
            });
        }
        this.resetFields();
    };
    createTaskComponent.prototype.resetFields = function () {
        this.title = "";
        this.date = null;
        this.des = "";
        this.pri = null;
    };
    createTaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './createTask.component.html',
            styleUrls: ['./createTask.component.css'],
            providers: [app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, app_service_1.AppService])
    ], createTaskComponent);
    return createTaskComponent;
}());
exports.createTaskComponent = createTaskComponent;
//# sourceMappingURL=createTask.component.js.map