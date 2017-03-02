import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {MyEvent} from "../event";
import {Router} from "@angular/router/";
@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
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
      (err: any) =>console.error(err), () => {
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
          (err: any) => console.error(err), () => {
          });


      },
      (err: any) => console.error(err), () => {
      });
  }
}

