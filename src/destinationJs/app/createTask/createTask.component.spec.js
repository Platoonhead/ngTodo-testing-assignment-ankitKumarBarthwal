"use strict";
var router_1 = require("@angular/router");
var testing_1 = require("@angular/router/testing");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var testing_2 = require("@angular/core/testing");
var platform_browser_1 = require('@angular/platform-browser');
var app_service_1 = require("../app.service");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var createTask_component_1 = require("./createTask.component");
describe('CreateComponent', function () {
    var de;
    var comp;
    var fixture;
    var service;
    var router;
    var route;
    var MockRouter = (function () {
        function MockRouter() {
        }
        MockRouter.prototype.navigate = function () {
            return Promise.resolve(true);
        };
        return MockRouter;
    }());
    var MockActivatedRoute = (function () {
        function MockActivatedRoute() {
            this.params = Observable_1.Observable.of({ 'id': '1' });
        }
        return MockActivatedRoute;
    }());
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [createTask_component_1.createTaskComponent],
            providers: [{ provide: router_1.Router, useClass: MockRouter },
                { provide: router_1.ActivatedRoute, useClass: MockActivatedRoute }, app_service_1.AppService],
            imports: [testing_1.RouterTestingModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(createTask_component_1.createTaskComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        service = fixture.debugElement.injector.get(app_service_1.AppService);
        router = fixture.debugElement.injector.get(router_1.Router);
        route = fixture.debugElement.injector.get(router_1.ActivatedRoute);
    });
    it('-- should create component for createTask', function () { return expect(comp).toBeDefined(); });
    //************************************************************************************
    it('-- should be able to get data from Background service', function () {
        spyOn(service, 'getItems').and.returnValue(Observable_1.Observable.of([{
                date: 'aa',
                title: 'bb',
                description: '',
                priority: '',
                _id: 1
            }]));
        comp.ngOnInit();
        expect(comp.title).toEqual('bb');
        expect(comp.date).toEqual('aa');
        expect(comp.des).toEqual('');
        expect(comp.pri).toEqual('');
    });
    //*********************************************************************************************
    it('-- should handle the error case in ngOninit', function () {
        spyOn(console, 'error');
        spyOn(service, 'getItems').and.returnValue(Observable_1.Observable.throw(Error('Observable Error Occurs')));
        comp.ngOnInit();
        expect(console.error).toHaveBeenCalledWith(Error('Observable Error Occurs'));
    });
    //**********************************************************************************************
    it('-- should be able to create new task', function () {
        comp.isSave = false;
        spyOn(service, 'setItems').and.returnValue(Observable_1.Observable.of([{
                date: 'aa',
                title: 'bb',
                description: '',
                priority: ''
            }]));
        comp.createTask({ "title": "dummy" });
        expect(comp.isSucess).toEqual(true);
    });
    //*********************************************************************************************
    it('-- should handle the error case in creating new', function () {
        comp.isSave = false;
        spyOn(console, 'error');
        spyOn(service, 'setItems').and.returnValue(Observable_1.Observable.throw(Error('Observable Error Occurs')));
        comp.createTask({ "title": "dummy" });
        expect(comp.isSucess).toEqual(false);
    });
    //**********************************************************************************************
    it('-- should be able update existing task', function () {
        comp.isSave = true;
        spyOn(service, 'updateItems').and.returnValue(Observable_1.Observable.of([{
                date: 'aa',
                title: 'bb',
                description: '',
                priority: ''
            }]));
        comp.createTask({ "title": "dummy" });
        expect(comp.isUpdated).toEqual(true);
    });
    //*********************************************************************************************
    it('-- should handle the error case in UpdateTask', function () {
        comp.isSave = true;
        spyOn(console, 'error');
        spyOn(service, 'updateItems').and.returnValue(Observable_1.Observable.throw(Error('Observable Error Occurs')));
        comp.createTask({ "title": "dummy" });
        expect(comp.isUpdated).toEqual(false);
    });
    //**********************************************************************************************
});
//# sourceMappingURL=createTask.component.spec.js.map