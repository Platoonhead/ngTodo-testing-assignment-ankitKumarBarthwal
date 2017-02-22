/**
 * Created by ankit on 16/2/17.
 */
import {Routes} from "@angular/router";
import {createTaskComponent} from "./createTask/createTask.component";
import {showComponent} from "./show/show.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [

  {path: '', component: HomeComponent},

  {
    path: 'createTask',
    component: createTaskComponent
  },

  {
    path: 'show',
    component: showComponent
  },
  {
    path: 'createTask/:id',
    component: createTaskComponent
  }

];
