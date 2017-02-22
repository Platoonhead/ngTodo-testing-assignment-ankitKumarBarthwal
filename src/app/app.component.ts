import {Component, OnInit} from "@angular/core";
import {AppService} from "./app.service";
import {MyEvent} from "./event";
@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
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

