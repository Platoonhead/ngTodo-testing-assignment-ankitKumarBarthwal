"use strict";
var router_1 = require("@angular/router");
var testing_1 = require("@angular/router/testing");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var testing_2 = require("@angular/core/testing");
var platform_browser_1 = require('@angular/platform-browser');
var app_service_1 = require("../app.service");
var http_1 = require("@angular/http");
require("rxjs/add/observable/of");
var home_component_1 = require("./home.component");
describe('HomeComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [home_component_1.HomeComponent],
            providers: [{ provide: router_1.Router },
                { provide: router_1.ActivatedRoute }, app_service_1.AppService],
            imports: [testing_1.RouterTestingModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(home_component_1.HomeComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('-- should create component for home', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=home.component.spec.js.map