import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {Router, ActivatedRoute} from "@angular/router";
import {MyEvent} from "../event";
@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: './createTask.component.html',
  styleUrls: ['./createTask.component.css'],
  providers: [AppService]
})
export class createTaskComponent implements OnInit {

  title: string;
  date: string;
  des: string;
  pri: string = "highs";
  isSucess: Boolean = false;
  isUpdated: Boolean = false;
  btnName: string = "CreateTask";
  isSave: boolean = false;
  temid = 0;
  idToUpdate = "";
  constructor(private router: Router, private route: ActivatedRoute, private service: AppService) {
  }

  ngOnInit() {
    this.route.params.subscribe((paraEvent: any) => {
      if (typeof paraEvent.id != 'undefined') {
        this.service.getItems().subscribe((data: any) => {
            let toEditItem = data.filter((x: any) => x._id == paraEvent.id)
            this.title = toEditItem[0].title;
            this.date = toEditItem[0].date;
            this.des = toEditItem[0].description;
            this.pri = toEditItem[0].priority;
            this.idToUpdate = paraEvent.id;
            this.btnName = "Save";
            this.isSave = true;
          },
          (err: any) => console.error(err), () => {
          });

        //let toEditItem = this.service.getItems().filter(x => x._id == paraEvent.id);
        //alert(toEditItem[0]);

      }
    });

  }

  createTask(form: any) {

    if (this.isSave == true) {
      this.service.updateItems(this.title, this.date, this.des, this.pri, this.idToUpdate).subscribe((data: any) => {
          this.isUpdated = true
        },
        (err: any) => {
          this.isUpdated = false;
        },
        () => {
          this.isUpdated = true;
        });
      this.btnName = "CreateTask";
      this.isSave = false;

    }
    else {
      this.isUpdated = false;
      this.title = form.title;
      this.date = form.date;
      this.des = form.description;
      this.pri = form.priority;
      this.service.setItems(this.title, this.date, this.des, this.pri).subscribe((data: any) => {
          this.isSucess = true;
        },
        (err: any) => {
          this.isSucess = false;
        },
        () => {
          this.isSucess = true;
        });


    }


    this.resetFields();
  }

  resetFields() {
    this.title = "";
    this.date = null;
    this.des = "";
    this.pri = null;
  }

}




