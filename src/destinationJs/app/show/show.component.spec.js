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
var show_component_1 = require("./show.component");
describe('ShowComponent', function () {
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
            declarations: [show_component_1.showComponent],
            providers: [{ provide: router_1.Router, useClass: MockRouter },
                { provide: router_1.ActivatedRoute, useClass: MockActivatedRoute }, app_service_1.AppService],
            imports: [testing_1.RouterTestingModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(show_component_1.showComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        service = fixture.debugElement.injector.get(app_service_1.AppService);
        router = fixture.debugElement.injector.get(router_1.Router);
        route = fixture.debugElement.injector.get(router_1.ActivatedRoute);
    });
    it('-- should create component for ShowTask', function () { return expect(comp).toBeDefined(); });
    //************************************************************************************
    it('-- should be able to get data from Backend service and set it into local storage', function () {
        spyOn(service, 'getItems').and.returnValue(Observable_1.Observable.of([{
                date: 'aa',
                title: 'bb',
                description: '',
                priority: '',
                _id: 1
            }]));
        comp.ngOnInit();
        expect(comp.storedData).toEqual([{
                date: 'aa',
                title: 'bb',
                description: '',
                priority: '',
                _id: 1
            }]);
    });
    //******************************************************************************************
    it('-- should handle the error case in ngOninit while getting data from backend Service', function () {
        spyOn(console, 'error');
        spyOn(service, 'getItems').and.returnValue(Observable_1.Observable.throw(Error('Observable Error Occurs')));
        comp.ngOnInit();
        expect(console.error).toHaveBeenCalledWith(Error('Observable Error Occurs'));
    });
    //**********************************************************************************************
    it('-- it should be able to navigate back to create task page', function () {
        comp.editTask(0);
        router.navigate([]).then(function (data) {
            expect(data).toBe(true);
        });
    });
    //************************************************************************************************
    it('-- it should be able to delete existing task in backend', function () {
        spyOn(service, 'del').and.returnValue(Observable_1.Observable.of([{
                date: '',
                title: '',
                description: '',
                priority: '',
                _id: 1
            }]));
        spyOn(service, 'getItems').and.returnValue(Observable_1.Observable.of([{
                date: 'aa',
                title: 'bb',
                description: '',
                priority: '',
                _id: 1
            }]));
        comp.taskDone(0);
        expect(comp.storedData).toEqual([{
                date: 'aa',
                title: 'bb',
                description: '',
                priority: '',
                _id: 1
            }]);
    });
    //******************************************************************************************
    it('-- should handle the error if unable to fetch data while deleting', function () {
        spyOn(service, 'del').and.returnValue(Observable_1.Observable.of([{
                date: '',
                title: '',
                description: '',
                priority: '',
                _id: 1
            }]));
        spyOn(console, 'error');
        spyOn(service, 'getItems').and.returnValue(Observable_1.Observable.throw(Error('Observable Error Occurs')));
        comp.taskDone(0);
        expect(console.error).toHaveBeenCalledWith(Error('Observable Error Occurs'));
    });
    //**********************************************************************************************
    it('-- should handle the error if unable to delete ', function () {
        spyOn(console, 'error');
        spyOn(service, 'del').and.returnValue(Observable_1.Observable.throw(Error('Observable Error Occurs')));
        comp.taskDone(0);
        expect(console.error).toHaveBeenCalledWith(Error('Observable Error Occurs'));
    });
    //**********************************************************************************************
});
//# sourceMappingURL=show.component.spec.js.map