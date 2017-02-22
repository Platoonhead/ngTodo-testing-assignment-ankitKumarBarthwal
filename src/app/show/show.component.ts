import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {MyEvent} from "../event";
import {Router} from "@angular/router/";
@Component({
  selector: 'my-app',
  templateUrl: './app/show/show.component.html',
  styleUrls: ['./app/show/show.component.css'],
  providers: [AppService]
})
export class showComponent implements OnInit {

  storedData: MyEvent[];

  constructor(private service: AppService, private router: Router) {

  }


  ngOnInit() {


    this.service.getItems().subscribe((data: any) => {
        this.storedData = data
      },
      (err: any) => alert(err), () => {
      });

  }

  editTask(event: any) {
    this.router.navigate(['createTask/' + event._id]);
  }

  taskDone(item: any) {
    this.service.del(item._id).subscribe((data: any) => {


        this.service.getItems().subscribe((data: any) => {
            this.storedData = data
          },
          (err: any) => alert(err), () => {
          });


      },
      (err: any) => alert(err), () => {
      });
  }
}

