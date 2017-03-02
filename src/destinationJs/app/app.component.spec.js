"use strict";
var app_component_1 = require('./app.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var testing_2 = require("@angular/router/testing");
var http_1 = require("@angular/http");
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
            providers: [router_1.RouterOutletMap, http_1.Http, http_1.ConnectionBackend],
            imports: [testing_2.RouterTestingModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('-- should create component for App', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=app.component.spec.js.map