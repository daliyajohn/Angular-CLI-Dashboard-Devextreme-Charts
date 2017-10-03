import { NgModule, Component, ViewChild, Inject, enableProdMode } from '@angular/core';
import { Bar2ChartService , Data} from './bar-chart2.service';
// import * as $ from 'jquery';/

@Component({
  moduleId: module.id,
  selector: 'app-chart2',
  templateUrl: 'bar-chart2.component.html',
  styleUrls: ['bar-chart2.component.css']
})
export class Bar2ChartComponent  {
  dataSource2: Data[];
  constructor(service: Bar2ChartService) {
    this.dataSource2 = service.getData2();
  }
}

