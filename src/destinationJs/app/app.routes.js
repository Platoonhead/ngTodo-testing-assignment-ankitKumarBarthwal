"use strict";
var createTask_component_1 = require("./createTask/createTask.component");
var show_component_1 = require("./show/show.component");
var home_component_1 = require("./home/home.component");
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'createTask',
        component: createTask_component_1.createTaskComponent
    },
    {
        path: 'show',
        component: show_component_1.showComponent
    },
    {
        path: 'createTask/:id',
        component: createTask_component_1.createTaskComponent
    }
];
//# sourceMappingURL=app.routes.js.map