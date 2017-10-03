import { NgModule, Component, ViewChild, Inject, enableProdMode } from '@angular/core';
import { Bar1ChartService , Data} from './bar-chart1.service';
// import * as $ from 'jquery';/

@Component({
  moduleId: module.id,
  selector: 'app-chart1',
  templateUrl: 'bar-chart1.component.html',
  styleUrls: ['bar-chart1.component.css']
})
export class Bar1ChartComponent  {
  dataSource1: Data[];
  constructor(service: Bar1ChartService) {
    this.dataSource1 = service.getData1();
  }
}

