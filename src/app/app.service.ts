import {Injectable} from "@angular/core";
import {MyEvent} from "./event";
import {Observable} from "rxjs/Rx";
import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Http, Headers} from "@angular/http";

@Injectable()
export class AppService {

  constructor(private http: Http) {
  }

  allevents: MyEvent[] = [];

  setItems(ti: string, da: string, des: string, pr: string): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });

    let obj = {
      date: da,
      title: ti,
      description: des,
      priority: pr
    };

    return this.http.post('http://localhost:9000/add', obj, {headers: jsonHeader})
      .map(data => {
        return this.extractData(data)
      })
      .catch((e: any) => {
        return this.handle(e)
      });
  }

  private handle(error: any) {
    let errMsg: string;
    try {
      if (JSON.parse(error._body).message) {
        errMsg = JSON.parse(error._body).message
      } else {
        errMsg = 'Some thing went wrong';
      }

    }
    catch (e) {
      errMsg = 'Somthing Went Wrong try again!!'
    }
    return Observable.throw(new Error(errMsg));
  }


  getItems():Observable<any>{
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get('http://localhost:9000/get/all', {headers: jsonHeader}).map((response: any) => {
      return this.extractData(response)
    });
  }

  extractData(res: any) {
    return res.json();
  }

  del(id: string): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get('http://localhost:9000/remove/' + id, {headers: jsonHeader}).map((data: any) => {
      return this.extractData(data)
    });
  }


  updateItems(ti: string, da: string, des: string, pr: string, id: string): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });

    let obj = {
      date: da,
      title: ti,
      description: des,
      priority: pr,
      _id: id
    };

    return this.http.post('http://localhost:9000/update', obj, {headers: jsonHeader})
      .map(data => {
        return this.extractData(data)
      })
      .catch((e: any) => {
        return this.handle(e)
      });
  }

}
