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
var platform_browser_1 = require("@angular/platform-browser");
var createTask_component_1 = require("./createTask/createTask.component");
var show_component_1 = require("./show/show.component");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var forms_1 = require("@angular/forms");
var home_component_1 = require("./home/home.component");
var http_1 = require('@angular/http');
var common_1 = require("@angular/common");
var app_service_1 = require("./app.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule.forRoot(app_routes_1.routes), http_1.HttpModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, show_component_1.showComponent, createTask_component_1.createTaskComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_service_1.AppService],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map