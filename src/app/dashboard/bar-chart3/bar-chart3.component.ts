import { NgModule, Component, ViewChild, Inject, enableProdMode } from '@angular/core';
import { Bar3ChartService , Data} from './bar-chart3.service';
// import * as $ from 'jquery';/

@Component({
  moduleId: module.id,
  selector: 'app-chart3',
  templateUrl: 'bar-chart3.component.html',
  styleUrls: ['bar-chart3.component.css']
})
export class Bar3ChartComponent  {
  dataSource3: Data[];
  constructor(service: Bar3ChartService) {
    this.dataSource3 = service.getData3();
  }
}

