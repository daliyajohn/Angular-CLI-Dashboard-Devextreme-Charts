import { Subject } from 'rxjs/Rx';
import { EventEmitter, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class AppService {
  uiComponent:  any;
  public showMenu: EventEmitter<boolean> = new EventEmitter();
  constructor(public _http: Http) {
    this.uiComponent = {};
  }
  ui(component: any) {
    if (component.v) {
      this.uiComponent[component.n] = this.uiComponent[component.n] || {};
      this.uiComponent[component.n] = component.v;
    }
    return this.uiComponent[component.n];
  }
}

