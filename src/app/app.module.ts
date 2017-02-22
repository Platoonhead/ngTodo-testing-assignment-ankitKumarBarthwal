import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {createTaskComponent} from "./createTask/createTask.component";
import {showComponent} from "./show/show.component";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home/home.component";
import {HttpModule} from '@angular/http';
import {CommonModule} from "@angular/common";
import {AppService} from "./app.service";


@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, RouterModule.forRoot(routes), HttpModule],
  declarations: [AppComponent, HomeComponent, showComponent, createTaskComponent ],
  bootstrap: [AppComponent],
  providers: [AppService],

})
export class AppModule {
}
