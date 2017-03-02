import {Component, OnInit} from "@angular/core";
import {AppService} from "./app.service";
import {MyEvent} from "./event";
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {

  event: MyEvent = new MyEvent();
  storage: MyEvent[];

  constructor(private service: AppService) {
  }

  ngOnInit() {


  }


}

