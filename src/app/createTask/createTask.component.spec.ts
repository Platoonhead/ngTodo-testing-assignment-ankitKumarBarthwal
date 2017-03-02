
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
import {createTaskComponent} from "./createTask.component";
import {NULL_TYPE} from "@angular/compiler/src/output/output_ast";

describe('CreateComponent', function () {
  let de: DebugElement;
  let comp: createTaskComponent;
  let fixture: ComponentFixture<createTaskComponent>;
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
      declarations: [createTaskComponent],
      providers: [{provide: Router, useClass: MockRouter},
        {provide: ActivatedRoute, useClass: MockActivatedRoute}, AppService],
      imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(createTaskComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(AppService);
    router = fixture.debugElement.injector.get(Router);
    route=fixture.debugElement.injector.get(ActivatedRoute);
  });

  it('-- should create component for createTask', () => expect(comp).toBeDefined());

  //************************************************************************************
  it('-- should be able to get data from Background service', () => {
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
    expect(comp.title).toEqual('bb')
    expect(comp.date).toEqual('aa')
    expect(comp.des).toEqual('')
    expect(comp.pri).toEqual('')
  });

//*********************************************************************************************
  it('-- should handle the error case in ngOninit', () => {
    spyOn(console, 'error');
    spyOn(service, 'getItems').and.returnValue(
      Observable.throw(Error('Observable Error Occurs'))
    );
    comp.ngOnInit();
    expect(console.error).toHaveBeenCalledWith(Error('Observable Error Occurs'));
  });
//**********************************************************************************************
  it('-- should be able to create new task', () => {
    comp.isSave = false;
    spyOn(service, 'setItems').and.returnValue(
      Observable.of<any>(
        [{
          date: 'aa',
          title: 'bb',
          description: '',
          priority: ''
        }]
      )
    );

    comp.createTask({"title":"dummy"});
    expect(comp.isSucess).toEqual(true)
  });
//*********************************************************************************************
  it('-- should handle the error case in creating new', () => {
    comp.isSave = false;
    spyOn(console, 'error');
    spyOn(service, 'setItems').and.returnValue(
      Observable.throw(Error('Observable Error Occurs'))
    );
    comp.createTask({"title":"dummy"});
    expect(comp.isSucess).toEqual(false)
  });
//**********************************************************************************************
  it('-- should be able update existing task', () => {
    comp.isSave = true;
    spyOn(service, 'updateItems').and.returnValue(
      Observable.of<any>(
        [{
          date: 'aa',
          title: 'bb',
          description: '',
          priority: ''
        }]
      )
    );

    comp.createTask({"title":"dummy"});
    expect(comp.isUpdated).toEqual(true)
  });

//*********************************************************************************************
  it('-- should handle the error case in UpdateTask', () => {
    comp.isSave = true;
    spyOn(console, 'error');
    spyOn(service, 'updateItems').and.returnValue(
      Observable.throw(Error('Observable Error Occurs'))
    );
    comp.createTask({"title":"dummy"});
    expect(comp.isUpdated).toEqual(false)
  });
//**********************************************************************************************

});


