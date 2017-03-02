
import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterOutletMap} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule, Http, ConnectionBackend} from "@angular/http";
import {Observable} from "rxjs";
import {AppService} from "./app.service";

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ AppComponent ],
        providers: [RouterOutletMap,Http,ConnectionBackend],
        imports: [RouterTestingModule,CommonModule, FormsModule,HttpModule]

      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('-- should create component for App', () => expect(comp).toBeDefined() );

});
