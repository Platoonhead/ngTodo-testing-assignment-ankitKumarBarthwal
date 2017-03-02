
import { Router, ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {async, TestBed, ComponentFixture} from "@angular/core/testing";
import {By}           from '@angular/platform-browser';
import {DebugElement} from "@angular/core";
import {AppService} from "../app.service";
import {HttpModule} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {showComponent} from "./show.component";

describe('ShowComponent', function () {
  let de: DebugElement;
  let comp: showComponent;
  let fixture: ComponentFixture<showComponent>;
  let service: AppService;
  let router: Router;
  let route:ActivatedRoute;

  class MockRouter {
    navigate():Promise<boolean>{
      return Promise.resolve(true)
    }
  }
  class MockActivatedRoute {
    params = Observable.of<any>({'id':'1'})
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [showComponent],
      providers: [{provide: Router, useClass: MockRouter},
        {provide: ActivatedRoute, useClass: MockActivatedRoute}, AppService],
      imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(showComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(AppService);
    router = fixture.debugElement.injector.get(Router);
    route=fixture.debugElement.injector.get(ActivatedRoute);
  });

  it('-- should create component for ShowTask', () => expect(comp).toBeDefined());

  //************************************************************************************
  it('-- should be able to get data from Backend service and set it into local storage', () => {
    spyOn(service, 'getItems').and.returnValue(
      Observable.of<any>(
        [{
          date: 'aa',
          title: 'bb',
          description: '',
          priority: '',
          _id:1
        }]
      )
    );
    comp.ngOnInit();
    expect(comp.storedData).toEqual([{
      date: 'aa',
      title: 'bb',
      description: '',
      priority: '',
      _id:1
    }])

  });

  //******************************************************************************************
  it('-- should handle the error case in ngOninit while getting data from backend Service', () => {
    spyOn(console, 'error');
    spyOn(service, 'getItems').and.returnValue(
      Observable.throw(Error('Observable Error Occurs'))
    );
    comp.ngOnInit();
    expect(console.error).toHaveBeenCalledWith(Error('Observable Error Occurs'));
  });
//**********************************************************************************************

  it('-- it should be able to navigate back to create task page', () => {
    comp.editTask(0);
    router.navigate([]).then(data => {
      expect(data).toBe(true);
    })

  });
//************************************************************************************************

  it('-- it should be able to delete existing task in backend', () => {
    spyOn(service, 'del').and.returnValue(
      Observable.of<any>(
        [{
          date: '',
          title: '',
          description: '',
          priority: '',
          _id: 1
        }]
      )
    );
    spyOn(service, 'getItems').and.returnValue(
      Observable.of<any>(
        [{
          date: 'aa',
          title: 'bb',
          description: '',
          priority: '',
          _id:1
        }]
      )
    );
    comp.taskDone(0);
    expect(comp.storedData).toEqual([{
      date: 'aa',
      title: 'bb',
      description: '',
      priority: '',
      _id:1
    }])

  });

  //******************************************************************************************
  it('-- should handle the error if unable to fetch data while deleting', () => {
    spyOn(service, 'del').and.returnValue(
      Observable.of<any>(
        [{
          date: '',
          title: '',
          description: '',
          priority: '',
          _id: 1
        }]
      )
    );
    spyOn(console, 'error');
    spyOn(service, 'getItems').and.returnValue(
      Observable.throw(Error('Observable Error Occurs'))
    );
    comp.taskDone(0);
    expect(console.error).toHaveBeenCalledWith(Error('Observable Error Occurs'));
  });
//**********************************************************************************************
  it('-- should handle the error if unable to delete ', () => {
    spyOn(console, 'error');
    spyOn(service, 'del').and.returnValue(
      Observable.throw(Error('Observable Error Occurs'))
    );
    comp.taskDone(0);
    expect(console.error).toHaveBeenCalledWith(Error('Observable Error Occurs'));
  });
//**********************************************************************************************


});



